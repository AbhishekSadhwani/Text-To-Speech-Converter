import { Header, Input, Play } from './Components';

function App() {

  return (
    <div className='min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100'>
      <div className='container mx-auto py-8 px-4'>
        <Header />
        <div className='max-w-4xl m-auto'>
          <Input />
          <Play />
        </div>
      </div>
    </div>








    // <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100">
    //   <div className="container mx-auto px-4 py-8">
    //     {/* Header */}
    //     <Header />

    //     {/* Main Content */}
    //     <div className="max-w-4xl mx-auto">
    //       {/* Controls Panel */}
    //       <div className="bg-white rounded-t-xl p-4 shadow-sm border border-gray-100">
    //         <div className="flex items-center justify-between">
    //           <div className="flex items-center gap-4">
    //             <select className="bg-gray-50 border border-gray-200 text-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500">
    //               <option>English (US)</option>
    //               <option>English (UK)</option>
    //               <option>Spanish</option>
    //               <option>French</option>
    //             </select>
    //             <select className="bg-gray-50 border border-gray-200 text-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500">
    //               <option>Female Voice</option>
    //               <option>Male Voice</option>
    //             </select>
    //           </div>
    //           <button className="text-gray-600 hover:text-gray-800 transition-colors">
    //             <Settings className="h-5 w-5" />
    //           </button>
    //         </div>
    //       </div>

    //       {/* Text Input */}
    //       <div className="bg-white shadow-md border border-t-0 border-gray-100">
    //         <textarea
    //           className="w-full h-64 p-6 text-gray-700 focus:outline-none resize-none"
    //           placeholder="Enter your text here..."
    //         />
    //       </div>

    //       {/* Action Buttons */}
    //       <div className="bg-white rounded-b-xl p-4 border border-t-0 border-gray-100 shadow-lg">
    //         <div className="flex items-center justify-between">
    //           <div className="flex items-center gap-2 text-sm text-gray-500">
    //             <Mic className="h-4 w-4" />
    //             <span>0 / 5000 characters</span>
    //           </div>
    //           <div className="flex items-center gap-3">
    //             <button className="p-2 text-gray-600 hover:text-gray-800 transition-colors">
    //               <RotateCcw className="h-5 w-5" />
    //             </button>
    //             <button className="p-2 text-gray-600 hover:text-gray-800 transition-colors">
    //               <Download className="h-5 w-5" />
    //             </button>
    //             <button className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg transition-colors">
    //               <PlayCircle className="h-5 w-5" />
    //               <span>Convert to Speech</span>
    //             </button>
    //           </div>
    //         </div>
    //       </div>

    //       {/* Audio Player Preview */}
    //       <div className="mt-8 bg-white rounded-xl p-6 shadow-lg border border-gray-100">
    //         <div className="flex items-center justify-between">
    //           <div className="flex items-center gap-4">
    //             <button className="text-indigo-600 hover:text-indigo-700 transition-colors">
    //               <PauseCircle className="h-10 w-10" />
    //             </button>
    //             <div className="flex-1">
    //               <div className="h-2 bg-gray-200 rounded-full">
    //                 <div className="h-2 bg-indigo-600 rounded-full w-1/3"></div>
    //               </div>
    //               <div className="flex justify-between mt-2 text-sm text-gray-500">
    //                 <span>1:23</span>
    //                 <span>3:45</span>
    //               </div>
    //             </div>
    //           </div>
    //           <div className="flex items-center gap-4">
    //             <Volume2 className="h-5 w-5 text-gray-600" />
    //             <div className="w-24 h-2 bg-gray-200 rounded-full">
    //               <div className="h-2 bg-gray-600 rounded-full w-2/3"></div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default App;
