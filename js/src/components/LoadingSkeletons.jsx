const LoadingSkeletons = () => (
  <div className="min-h-screen bg-gray-100 p-6">
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-8">
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="bg-white rounded-lg p-6 animate-pulse">
          <div className="h-4 bg-gray-300 rounded w-2/3 mb-2" />
          <div className="h-8 bg-gray-200 rounded w-full mt-2" />
        </div>
      ))}
    </div>
  </div>
);

export default LoadingSkeletons;