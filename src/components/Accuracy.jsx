import React from 'react'

export const Accuracy = () => {
  return (
    <div>
        <h2 className="text-blue-900 font-bold px-6 py-1">Accuracy</h2>
  <table>
    <tr className="border-b">
      <th className="px-5 py-3">Name</th>
      <th className="px-8">Accuracy Achieved</th>
      <th></th>
    </tr>
    <tr className="border-b">
      <th className="px-5 py-3">Ankit</th>
      <th>
        <div className="bg-blue-200 h-3 rounded-lg">
          <div className="bg-blue-700 h-3 w-4/5 rounded-lg"></div>
        </div>
      </th>
      <th className="pl-5">
        <button className="text-gray-900 border border-blue-300 font-medium rounded-lg text-sm px-5 py-0.5">80%</button>
      </th>
    </tr>
    <tr className="border-b">
      <th className="px-5 py-3">Vikky</th>
      <th>
        <div className="bg-blue-200 h-3 rounded-lg">
          <div className="bg-blue-700 h-3 w-3/5 rounded-lg"></div>
        </div>
      </th>
      <th className="pl-3">
        <button className="text-gray-900 border border-blue-300 font-medium rounded-lg text-sm px-5 py-0.5">60%</button>
      </th>
    </tr>
    <tr className="border-b">
      <th className="px-5 py-3">Happy</th>
      <th>
        <div className="bg-blue-200 h-3 rounded-lg">
          <div className="bg-blue-700 h-3 w-1/2 rounded-lg"></div>
        </div>
      </th>
      <th className="pl-3">
        <button className="text-gray-900 border border-blue-300 font-medium rounded-lg text-sm px-5 py-0.5">50%</button>
      </th>
    </tr>
    <tr className="border-b">
      <th className="px-5 py-3">Virat</th>
      <th>
        <div className="bg-blue-200 h-3 rounded-lg">
          <div className="bg-blue-700 h-3 w-1/4 rounded-lg"></div>
        </div>
      </th>
      <th className="pl-3">
        <button className="text-gray-900 border border-blue-300 font-medium rounded-lg text-sm px-5 py-0.5">25%</button>
      </th>
    </tr>
  </table>
</div>

  )
}
