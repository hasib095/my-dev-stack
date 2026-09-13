import type { Technology } from "../types";

interface ITechnologyCardProps {
  technology: Technology;
  isAdded: boolean;
  onAdd: (technology: Technology) => void;
}

const TechnologyCard = ({technology,isAdded,onAdd,}: ITechnologyCardProps) => {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between">
        <img src={technology.icon}alt={technology.name}className="h-7 w-7 object-contain"/>

        <span className="rounded-full bg-blue-50 px-2 py-1 text-xs text-blue-500">{technology.badge}
        </span>
      </div>

      <h3 className="mt-4 text-base font-semibold text-slate-900">{technology.name}</h3>
      <p className="mt-2 min-h-[60px] text-xs leading-5 text-gray-500">{technology.description}
      </p>

 <div className="mt-4 flex items-center justify-between text-xs">
<span className="rounded bg-gray-100 px-2 py-1 text-gray-600">{technology.category}</span>

<span className="text-gray-500">{technology.difficulty}</span>
<span className="text-gray-600">⭐ {technology.rating}</span>
</div>
      <button onClick={() => onAdd(technology)} disabled={isAdded} className={`mt-4 w-full rounded-md py-2 text-xs font-medium ${ isAdded? "cursor-not-allowed bg-gray-300 text-gray-600": "bg-slate-950 text-white hover:bg-slate-800"}`}> {isAdded ? "✓ Added to Stack" : "Add to Stack"}</button>
</div>
  );
};
export default TechnologyCard;