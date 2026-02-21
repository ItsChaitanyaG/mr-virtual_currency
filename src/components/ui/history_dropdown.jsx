import { useState, useRef, useEffect } from "react";

export default function CustomDropdown({
  options,
  placeholder,
  width = "w-32",
}) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(placeholder);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={`relative text-sm ${width}`} ref={dropdownRef}>
      {/* Trigger */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="bg-slate-700 px-4 py-2 pr-8 rounded-md border border-slate-600 focus:outline-none w-full text-left flex items-center justify-between"
      >
        <span className="truncate">{selected}</span>
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute left-0 mt-2 w-full bg-slate-700 border border-slate-600 rounded-md shadow-lg z-50 overflow-hidden">
          {options.map((option, index) => (
            <div
              key={index}
              onClick={() => {
                setSelected(option);
                setOpen(false);
              }}
              className="px-4 py-2 hover:bg-slate-600 cursor-pointer whitespace-nowrap"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
