const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./forging_data.db');

// Your Excel data parsed
const excelData = {
  'Ranjangaon': {
    tonnage: {
      'Apr-24': 3705, 'May-24': 4481, 'Jun-24': 4824, 'Jul-24': 5214, 'Aug-24': 4276,
      'Sep-24': 4467, 'Oct-24': 4625, 'Nov-24': 3306, 'Dec-24': 4982, 'Jan-25': 4663,
      'Feb-25': 3715, 'Mar-25': 3694, 'Apr-25': 4374, 'May-25': 4399, 'Jun-25': 4824, 'Jul-25': 5037
    },
    data: {
      'Consumables': {
        'Apr-24': 4454, 'May-24': 3234, 'Jun-24': 3103, 'Jul-24': 3013, 'Aug-24': 3171,
        'Apr-25': 3633, 'May-25': 3875, 'Jun-25': 3230, 'Jul-25': 3470
      },
      'Power': {
        'Apr-24': 7206, 'May-24': 7189, 'Jun-24': 6918, 'Jul-24': 7987, 'Aug-24': 7853,
        'Apr-25': 7374, 'May-25': 7183, 'Jun-25': 7116, 'Jul-25': 7477
      },
      'Fuel': {
        'Apr-24': 3093, 'May-24': 3221, 'Jun-24': 3020, 'Jul-24': 3026, 'Aug-24': 3189,
        'Apr-25': 3136, 'May-25': 3345, 'Jun-25': 3025, 'Jul-25': 3237
      },
      'Labour Charges': {
        'Apr-24': 1868, 'May-24': 1611, 'Jun-24': 1811, 'Jul-24': 1330, 'Aug-24': 1826,
        'Apr-25': 2271, 'May-25': 2619, 'Jun-25': 2013, 'Jul-25': 2150
      },
      'Sub-Contract': {
        'Apr-24': 8090, 'May-24': 7443, 'Jun-24': 6339, 'Jul-24': 5767, 'Aug-24': 7863,
        'Apr-25': 8207, 'May-25': 7885, 'Jun-25': 7017, 'Jul-25': 7560
      },
      'Machine Hire Charges': {
        'Apr-24': 825, 'May-24': 583, 'Jun-24': 675, 'Jul-24': 591, 'Aug-24': 796,
        'Apr-25': 632, 'May-25': 510, 'Jun-25': 858, 'Jul-25': 609
      },
      'Repair & Maintenance': {
        'Apr-24': 2041, 'May-24': 960, 'Jun-24': 1710, 'Jul-24': 1754, 'Aug-24': 1466,
        'Apr-25': 1436, 'May-25': 3871, 'Jun-25': 3337, 'Jul-25': 3151
      },
      'Employee Cost': {
        'Apr-24': 6717, 'May-24': 5555, 'Jun-24': 5160, 'Jul-24': 4774, 'Aug-24': 5821,
        'Apr-25': 5788, 'May-25': 5756, 'Jun-25': 5248, 'Jul-25': 5026
      },
      'Establishment Expenses': {
        'Apr-24': 2065, 'May-24': 1484, 'Jun-24': 1551, 'Jul-24': 1358, 'Aug-24': 1633,
        'Apr-25': 1177, 'May-25': 1287, 'Jun-25': 1281, 'Jul-25': 1188
      }
    }
  }
  // Add other locations similarly
};

// Function to parse month-year
function parseMonthYear(monthYear) {
  const [month, year] = monthYear.split('-');
  const monthMap = {
    'Jan': 1, 'Feb': 2, 'Mar': 3, 'Apr': 4, 'May': 5, 'Jun': 6,
    'Jul': 7, 'Aug': 8, 'Sep': 9, 'Oct': 10, 'Nov': 11, 'Dec': 12
  };
  return {
    month: monthYear,
    year: parseInt('20' + year),
    month_num: monthMap[month]
  };
}

// Import data
db.serialize(() => {
  const stmt = db.prepare(`
    INSERT OR REPLACE INTO monthly_data 
    (location_id, category_id, month, year, month_num, tonnage, cost_per_ton, total_cost, data_type)
    VALUES (
      (SELECT id FROM locations WHERE name = ?),
      (SELECT id FROM kpi_categories WHERE category_name = ?),
      ?, ?, ?, ?, ?, ?, ?
    )
  `);

  Object.keys(excelData).forEach(location => {
    const locationData = excelData[location];
    
    Object.keys(locationData.data).forEach(category => {
      const categoryData = locationData.data[category];
      
      Object.keys(categoryData).forEach(monthYear => {
        const { month, year, month_num } = parseMonthYear(monthYear);
        const tonnage = locationData.tonnage[monthYear] || 0;
        const costPerTon = categoryData[monthYear];
        const totalCost = tonnage * costPerTon;
        
        stmt.run(
          location, category, month, year, month_num,
          tonnage, costPerTon, totalCost, 'actual'
        );
      });
    });
  });
  
  stmt.finalize();
  console.log('Data imported successfully');
});

db.close();