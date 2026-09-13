import { useEffect, useState } from "react";
import type { Technology } from "../types";

import TechnologyCard from "./TechnologyCard";
import YourStack from "./YourStack";

const Technologies = () => {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [stack, setStack] = useState<Technology[]>([]);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json() as Promise<Technology[]>)
      .then(setTechnologies);
  }, []);

  // Add technology
  const handleAdd = (technology: Technology) => {
    const alreadyAdded = stack.some(
      (item) => item.id === technology.id
    );

    if (alreadyAdded) {
      alert("This technology is already in your stack!");
      return;
    }

    setStack([...stack, technology]);
  };

  // Remove one technology
  const handleRemove = (id: string) => {
    setStack(stack.filter((item) => item.id !== id));
  };

  // Remove all technologies
  const handleRemoveAll = () => {
    setStack([]);
  };

  return (
    <section className="bg-white py-16" id="technologies">

      <div className="mx-auto max-w-6xl px-4">

        {/* Section Heading */}
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

        {/* Main Layout */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">

          {/* Technology Cards */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:col-span-3 lg:grid-cols-3">

            {technologies.map((technology) => (
              <TechnologyCard
                key={technology.id}
                technology={technology}
                isAdded={stack.some(
                  (item) => item.id === technology.id
                )}
                onAdd={handleAdd}
              />
            ))}

          </div>

          {/* Your Stack */}
          <div>
            <YourStack
              stack={stack}
              onRemove={handleRemove}
              onRemoveAll={handleRemoveAll}
            />
          </div>

        </div>

      </div>

    </section>
  );
};

export default Technologies;