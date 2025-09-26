const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./forging_data.db');

db.serialize(() => {
  // 1. Locations Table
  db.run(`CREATE TABLE IF NOT EXISTS locations (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT UNIQUE NOT NULL,
    plant_type TEXT,
    lines TEXT,
    status TEXT DEFAULT 'active'
  )`);

  // 2. KPI Categories Table
  db.run(`CREATE TABLE IF NOT EXISTS kpi_categories (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    category_name TEXT UNIQUE NOT NULL,
    display_order INTEGER,
    unit TEXT DEFAULT 'Per Ton',
    category_type TEXT -- 'variable_cost', 'fixed_cost', 'total'
  )`);

  // 3. Monthly Data Table (Main data table)
  db.run(`CREATE TABLE IF NOT EXISTS monthly_data (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    location_id INTEGER,
    category_id INTEGER,
    month TEXT, -- 'Apr-24', 'May-24', etc.
    year INTEGER,
    month_num INTEGER, -- 1-12
    tonnage REAL,
    cost_per_ton REAL,
    total_cost REAL,
    budget_per_ton REAL,
    budget_total REAL,
    data_type TEXT DEFAULT 'actual', -- 'actual', 'budget', 'forecast'
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (location_id) REFERENCES locations(id),
    FOREIGN KEY (category_id) REFERENCES kpi_categories(id),
    UNIQUE(location_id, category_id, month, year, data_type)
  )`);

  // 4. Summary Table (for YTD, QTD, MTD calculations)
  db.run(`CREATE TABLE IF NOT EXISTS summary_data (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    location_id INTEGER,
    category_id INTEGER,
    period_type TEXT, -- 'YTD', 'QTD', 'MTD', 'LastMonth', 'LastQuarter'
    period_value REAL,
    period_change REAL,
    as_of_date DATE,
    FOREIGN KEY (location_id) REFERENCES locations(id),
    FOREIGN KEY (category_id) REFERENCES kpi_categories(id)
  )`);

  // 5. Create indexes for better performance
  db.run(`CREATE INDEX IF NOT EXISTS idx_monthly_location ON monthly_data(location_id)`);
  db.run(`CREATE INDEX IF NOT EXISTS idx_monthly_date ON monthly_data(year, month_num)`);
  db.run(`CREATE INDEX IF NOT EXISTS idx_monthly_category ON monthly_data(category_id)`);

  console.log('Database schema created successfully');
});

// Insert base data
db.serialize(() => {
  // Insert locations
  const locations = [
    { name: 'Ranjangaon', plant_type: 'Forging', lines: 'Line 1 to 16' },
    { name: 'Mundhwa', plant_type: 'Forging', lines: 'Multiple' },
    { name: 'R-2', plant_type: 'Forging', lines: 'Multiple' },
    { name: 'Baramati', plant_type: 'Forging', lines: 'Multiple' }
  ];

  const locationStmt = db.prepare(`INSERT OR IGNORE INTO locations (name, plant_type, lines) VALUES (?, ?, ?)`);
  locations.forEach(loc => {
    locationStmt.run(loc.name, loc.plant_type, loc.lines);
  });
  locationStmt.finalize();

  // Insert KPI categories
  const categories = [
    { name: 'Consumables', order: 1, type: 'variable_cost' },
    { name: 'Power', order: 2, type: 'variable_cost' },
    { name: 'Fuel', order: 3, type: 'variable_cost' },
    { name: 'Labour Charges', order: 4, type: 'variable_cost' },
    { name: 'Sub-Contract', order: 5, type: 'variable_cost' },
    { name: 'Machine Hire Charges', order: 6, type: 'variable_cost' },
    { name: 'Repair & Maintenance', order: 7, type: 'variable_cost' },
    { name: 'Employee Cost', order: 8, type: 'fixed_cost' },
    { name: 'Establishment Expenses', order: 9, type: 'fixed_cost' },
    { name: 'Packing', order: 10, type: 'variable_cost' },
    { name: 'Freight', order: 11, type: 'variable_cost' },
    { name: 'Total VC', order: 12, type: 'total' },
    { name: 'Total', order: 13, type: 'total' }
  ];

  const categoryStmt = db.prepare(`INSERT OR IGNORE INTO kpi_categories (category_name, display_order, category_type) VALUES (?, ?, ?)`);
  categories.forEach(cat => {
    categoryStmt.run(cat.name, cat.order, cat.type);
  });
  categoryStmt.finalize();

  console.log('Base data inserted successfully');
});

db.close();