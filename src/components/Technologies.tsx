import { use, useState } from "react";
import { toast } from "react-toastify";
import type { Technology } from "../types";
import TechnologyCard from "./TechnologyCard";
import YourStack from "./YourStack";

const technologiesPromise = fetch("/data.json") 
.then((response) => response.json());

const Technologies = () => {
  const technologies = use(technologiesPromise);
  const [stack, setStack] = useState<Technology[]>([]);

  const handleAdd = (technology: Technology) => {
    const alreadyAdded = stack.some((item) => item.id === technology.id);

    if (alreadyAdded) {
      toast.warning("This technology is already in your stack!");
      return;
    }
    setStack([...stack, technology]);
    toast.success(`${technology.name} added to your stack.`);
  };

  const handleRemove = (id: string) => {
    setStack(stack.filter((item) => item.id !== id));
    toast.success("Technology removed from your stack.");
  };
  const handleRemoveAll = () => {
    setStack([]);
    toast.info("All technologies removed from your stack.");
  };

  return (
    <section className="bg-white py-1" id="technologies">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-slate-900">
            Explore the{" "}
            <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>
          <p className="mt-1 text-sm text-gray-400">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:col-span-3 lg:grid-cols-3">
            {technologies.map((technology) => (
              <TechnologyCard
                key={technology.id}
                technology={technology}
                isAdded={stack.some((item) => item.id === technology.id)}
                onAdd={handleAdd}
              />
            ))}
          </div>
          <div>
            <YourStack stack={stack} onRemove={handleRemove} onRemoveAll={handleRemoveAll}/>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Technologies;
