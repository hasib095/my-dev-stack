import type { Technology } from "../types";

interface YourStackProps {
  stack: Technology[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
}

const YourStack = ({ stack, onRemove, onRemoveAll }: YourStackProps) => {
  return (
    <div
      className={`sticky top-20 rounded-xl border bg-white p-5 shadow-sm transition-colors ${
        stack.length > 0 ? "border-pink-500" : "border-gray-200"
      }`}
    >
      <h2 className="text-lg font-semibold text-slate-900">Your Stack</h2>

      <p className="mt-1 text-sm text-gray-400">
        {stack.length === 0
          ? "No technologies selected yet."
          : `${stack.length} Technology${stack.length > 1 ? "ies" : ""} Selected`}
      </p>

      {stack.length === 0 ? (
        <div className="mt-5 flex h-20 items-center justify-center rounded-lg border border-dashed border-gray-200 text-sm text-gray-400">
          Your stack is empty.
        </div>
      ) : (
        <>
          <div className="mt-5 space-y-2">
            {stack.map((technology) => (
              <div
                key={technology.id}
                className="flex items-center gap-3 rounded-lg border border-gray-200 p-3"
              >
                <img
                  src={technology.icon}
                  alt={technology.name}
                  className="h-7 w-7 object-contain"
                />

                <div className="flex-1">
                  <h3 className="text-sm font-semibold text-slate-900">
                    {technology.name}
                  </h3>
                  <p className="text-[10px] text-gray-400">
                    {technology.category}
                  </p>
                </div>

                <button
                  onClick={() => onRemove(technology.id)}
                  className="text-xl text-gray-400 hover:text-red-500"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
          <button
            onClick={onRemoveAll}
            className="mt-5 w-full rounded-lg border border-red-300 py-2 text-sm font-medium text-red-500 hover:bg-red-50"
          >
            Remove All
          </button>
        </>
      )}
    </div>
  );
};

export default YourStack;
