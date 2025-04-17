import React from "react";

interface FurnitureSelectionProps {
  furnitureCategories: {
    category: string;
    items: { name: string; icon: string }[];
  }[];
  selectedFurniture: Record<string, number>;
  setSelectedFurniture: React.Dispatch<React.SetStateAction<Record<string, number>>>;
}

const FurnitureSelection: React.FC<FurnitureSelectionProps> = ({
  furnitureCategories,
  selectedFurniture,
  setSelectedFurniture,
}) => {
  const handleFurnitureChange = (name: string, change: number) => {
    setSelectedFurniture((prev) => {
      const newCount = (prev[name] || 0) + change;
      if (newCount <= 0) {
        // Remove item if the count goes to 0
        const { [name]: _, ...rest } = prev;
        return rest;
      }
      return { ...prev, [name]: newCount };
    });
  };

  return (
    <div className="mt-6">
      {furnitureCategories.map((category) => (
        <div key={category.category} className="mb-6">
          <h3 className="text-lg font-semibold mb-4">{category.category}</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {category.items.map((item) => (
              <div
                key={item.name}
                className="p-4 border rounded-lg shadow-sm flex flex-col items-center bg-white hover:shadow-md transition"
              >
                <img src={item.icon} alt={item.name} className="w-16 h-16 mb-2" />
                <span className="font-medium">{item.name}</span>
                <div className="flex items-center justify-center gap-2 mt-2">
                  <button
                    className="w-10 h-10 bg-[#0D3F53] text-white font-bold text-xl rounded-full flex items-center justify-center hover:bg-[#0A2E3D] transition"
                    onClick={() => handleFurnitureChange(item.name, -1)}
                    disabled={!selectedFurniture[item.name]} // Disable if count is 0
                  >
                    -
                  </button>

                  <span className="font-semibold text-lg">
                    {selectedFurniture[item.name] || 0}
                  </span>

                  <button
                    className="w-10 h-10 bg-[#0D3F53] text-white font-bold text-xl rounded-full flex items-center justify-center hover:bg-[#0A2E3D] transition"
                    onClick={() => handleFurnitureChange(item.name, 1)}
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FurnitureSelection;
