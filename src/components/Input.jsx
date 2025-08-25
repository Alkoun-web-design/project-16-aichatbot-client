import {GenerateIcon} from "./Icons";

export default function Input(props) {
    return (
        <div className="fixed left-0 bottom-0 pb-20 pt-10 px-10 w-full bg-white border-t-2 border-t-gray-300">
          <label
            htmlFor=""
            className="mx-40 mb-4 block text-lg font-semibold text-dark dark:text-white"
          >
            What is your request or topic?
          </label>
          <div className="relative mx-40">
            <input
              onChange={props.handleInputChange}
              type="text"
              placeholder="Type your text..."
              className="flex h-[60px] w-full items-center rounded-lg border border-gray-400 bg-transparent py-3 px-10 pr-20 text-dark placeholder-body-color outline-none focus:border-primary md:pr-[160px] dark:border-dark-3 dark:text-white dark:placeholder-dark-6"
            />
            <button onClick={props.promptingMistralAI} className="absolute right-2 top-1/2 inline-flex h-11 -translate-y-1/2 items-center justify-center gap-2 rounded-lg bg-primary py-2.5 pl-4 pr-5 font-medium text-indigo-800 hover:bg-primary/90 hover:cursor-pointer transition-all border-2 border-indigo-800 hover:bg-indigo-800 hover:text-white">
              <span>
                <GenerateIcon/>
              </span>
              <span className="max-md:hidden">{props.isLoading ? 'Generating...' : 'Generate'}</span>
            </button>
          </div>
        </div>
    )
}