import { useState } from "react";
import FieldInput from "../../components/fieldInput/FieldInput";
import Button from "../../components/button/Button";

const ProductTracking = () => {
  const [form, setForm] = useState({
    productId: "778",
    category: "FOOD",
    subCategory: "",
    name: "",
    unit: "",
    customerPrice: "",
    internalPrice: "",
    menuTagged: "",
    description: "",
    active: true,
  });

  const handleChange = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSave = () => console.log("Saved", form);
  const handleCancel = () => console.log("Cancelled");
  return (
    <div className="min-h-screen bg-[#dfe8f6] p-4">
      <div className=" mx-auto flex gap-4">
        {/* 🔷 LEFT ACTION PANEL */}

        {/* 🔷 MAIN CONTENT */}
        <div className="flex-1 border border-gray-300 bg-white">
          {/* Header */}

          <div className="bg-[#1b7398] border-b border-gray-300 px-4 py-2 flex items-center gap-2">
            <h2 className="text-md font-bold m-0 text-white">
              Product Tracking{" "}
              <span className="text-xs text-white underline cursor-pointer">
                [search]
              </span>
            </h2>
          </div>

          {/* Form Body */}
          <div className="p-6">
            <div className="grid md:grid-cols-2 gap-x-16 gap-y-4 text-sm">
              {/* LEFT COLUMN */}
              <div className="space-y-3">
                <div>
                  <label className="font-semibold text-xs">Product Id:</label>
                  <FieldInput
                    className=" mt-1"
                    value={form.productId}
                    onChange={(e) => handleChange("productId", e.target.value)}
                  />
                </div>

                <div className="flex flex-col">
                  <label className="font-semibold text-xs">
                    Product Category:
                  </label>
                  <select
                    className="text-xs font-medium h-[35px] border border-gray-300 mt-1 px-2 py-1 bg-white"
                    value={form.category}
                    onChange={(e) => handleChange("category", e.target.value)}
                  >
                    <option>FOOD</option>
                    <option>NON-FOOD</option>
                  </select>
                </div>

                <div>
                  <label className="font-semibold text-xs">Product Name:</label>
                  <FieldInput
                    className="mt-1"
                    value={form.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                  />
                </div>

                <div>
                  <label className="font-semibold text-xs">
                    Customer Unit Price:
                  </label>
                  <FieldInput
                    className="mt-1"
                    value={form.customerPrice}
                    onChange={(e) =>
                      handleChange("customerPrice", e.target.value)
                    }
                  />
                </div>

                <div>
                  <label className="font-semibold text-xs">Menu Tagged:</label>
                  <FieldInput
                    className="mt-1"
                    value={form.menuTagged}
                    onChange={(e) => handleChange("menuTagged", e.target.value)}
                  />
                </div>
              </div>

              {/* RIGHT COLUMN */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <label className="font-semibold text-xs">Active:</label>
                  <input
                    type="checkbox"
                    checked={form.active}
                    onChange={(e) => handleChange("active", e.target.checked)}
                  />
                </div>

                <div className="flex flex-col">
                  <label className="font-semibold text-xs">
                    Product Sub Category:
                  </label>
                  <select
                    className=" border text-xs font-medium h-[35px] border-gray-300 mt-1 px-2 py-1 bg-white"
                    value={form.subCategory}
                    onChange={(e) =>
                      handleChange("subCategory", e.target.value)
                    }
                  >
                    <option value="">--Select--</option>
                  </select>
                </div>

                <div className="flex flex-col items-start">
                  <label className="font-semibold text-xs">Unit:</label>
                  <select
                    className="text-xs font-medium outline-none h-[35px] w-full border border-gray-300 mt-1 px-2 py-1 bg-white"
                    value={form.unit}
                    onChange={(e) => handleChange("unit", e.target.value)}
                  >
                    <option value="">Select</option>
                  </select>
                </div>

                <div>
                  <label className="font-semibold text-xs">
                    Internal Unit Price:
                  </label>
                  <FieldInput
                    className=" mt-1"
                    value={form.internalPrice}
                    onChange={(e) =>
                      handleChange("internalPrice", e.target.value)
                    }
                  />
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="mt-6">
              <label className="font-semibold text-xs">
                Product Description:
              </label>
              <textarea
                className="w-full border outline-none resize-none border-gray-300 mt-1 p-2 h-[120px] "
                value={form.description}
                onChange={(e) => handleChange("description", e.target.value)}
              />
            </div>
            <div className="flex  gap-2">
              <Button onClick={handleSave} label="Save" className="!mx-0" />
              <Button
                onClick={handleCancel}
                label=" Cancel Edit"
                className="!mx-0"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductTracking;
