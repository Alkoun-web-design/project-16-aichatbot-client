import { CopyIcon, EditIcon } from "./Icons"

export default function Output(props){
    return (
        <div>
          <label
            for=""
            className="mb-4 block text-lg font-semibold text-dark dark:text-white"
          >
            Result:
          </label>
          <div className="mb-6">
            {/* <div ref={props.textareaReference}
              className="w-full rounded-lg border border-stroke bg-transparent p-5 text-dark placeholder-dark-6 outline-none focus:border-primary dark:border-dark-3 dark:text-white dark:placeholder-dark-6">
              {props.output}
            </div> */}
            <textarea
              ref={props.textareaReference}
              value={props.output}
              rows="5"
              placeholder="Generated content will appear here..."
              className="w-full rounded-lg border border-gray-400 bg-transparent p-5 text-dark placeholder-dark-6 outline-none focus:border-primary dark:border-dark-3 dark:text-white dark:placeholder-dark-6"
            ></textarea>
          </div>
          <div className="flex items-center gap-3.5">
            <button className="inline-flex items-center justify-center gap-2 rounded-lg border hover:border-transparent bg-primary py-2 pl-3.5 pr-[18px] text-base font-medium border-gray-800 transition-all hover:bg-blue-400 text-gray-800 hover:text-white hover:cursor-pointer">
              <CopyIcon/>
              Copy
            </button>
            <button className="inline-flex items-center justify-center gap-2 rounded-lg border border-primary py-2 pl-3.5 pr-[18px] transition-all text-gray-800 hover:bg-red-400 hover:text-white hover:cursor-pointe">
              <EditIcon/>
              Edit
            </button>
          </div>
        </div>
    )
}