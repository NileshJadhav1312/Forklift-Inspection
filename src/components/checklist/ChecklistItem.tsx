"use client";

import { useState } from "react";
import { Check, ChevronDown, AlertTriangle, Flag, Ban } from "lucide-react";

// Individual checklist item component with checkbox, status controls, and note alerts
export default function ChecklistItem({
  item,
  isChecked: controlledChecked,
  onToggleCheck,
  status: controlledStatus,
  onStatusChange,
  isLast = false,
}) {
  const [internalChecked, setInternalChecked] = useState(false);
  const [internalStatus, setInternalStatus] = useState("pass");
  const [noteValue, setNoteValue] = useState("");

  const checked =
    controlledChecked !== undefined ? controlledChecked : internalChecked;
  const status =
    controlledStatus !== undefined ? controlledStatus : internalStatus;

  const handleToggleCheck = () => {
    if (onToggleCheck) {
      onToggleCheck();
    } else {
      setInternalChecked((prev) => !prev);
    }
  };

  const handleStatusChange = (newStatus) => {
    if (onStatusChange) {
      onStatusChange(newStatus);
    } else {
      setInternalStatus(newStatus);
    }
  };

  return (
    <div
      className={`flex flex-col gap-4 border-b border-border bg-white p-4 transition-colors duration-200 hover:bg-[#f0f9fa] sm:p-5 lg:flex-row lg:items-center lg:justify-between ${
        isLast ? "border-b-0" : ""
      }`}
    >
      {/* Item Details */}
      <div className="flex flex-1 items-start gap-3 sm:gap-4">
        <input
          type="checkbox"
          checked={checked}
          onChange={handleToggleCheck}
          className="mt-1 h-4 w-4 cursor-pointer accent-primary"
        />

        <div>
          <h3 className="text-sm font-bold text-text-main sm:text-base">
            {item.title}
          </h3>
          <p className="mt-0.5 text-xs text-text-muted">{item.description}</p>
        </div>
      </div>

      {/* Status Buttons */}
      <div className="flex items-center gap-2">
        {/* Pass */}
        <button
          type="button"
          onClick={() => handleStatusChange("pass")}
          className={`flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-semibold transition-colors duration-200 ${
            status === "pass"
              ? "border-green-300 bg-green-50 text-green-700 hover:bg-green-100"
              : "border-border bg-white text-text-muted hover:bg-gray-50"
          }`}
        >
          <Check size={14} />
          Pass
        </button>

        {/* Fail */}
        <button
          type="button"
          onClick={() => handleStatusChange("fail")}
          className={`flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-semibold transition-colors duration-200 ${
            status === "fail"
              ? "border-red-300 bg-red-50 text-red-600 hover:bg-red-100"
              : "border-border bg-white text-text-muted hover:bg-gray-50"
          }`}
        >
          <Ban size={13} />
          Fail
        </button>

        {/* NA */}
        <button
          type="button"
          onClick={() => handleStatusChange("na")}
          className={`flex items-center gap-1 rounded-lg border px-2.5 py-1.5 text-xs transition-colors duration-200 ${
            status === "na"
              ? "border-amber-300 bg-amber-50 font-semibold text-amber-700"
              : "border-border bg-white text-text-main hover:bg-gray-100"
          }`}
        >
          NA
          <ChevronDown size={13} />
        </button>
      </div>

      {/* Note */}
      <div className="w-full lg:w-[320px]">
        {item.noteType === "alert" ? (
          <div className="flex items-center justify-between rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-xs font-medium text-amber-800 transition-colors duration-200 hover:bg-amber-100">
            <span className="flex items-center gap-1.5">
              <AlertTriangle size={14} />
              {item.note}
            </span>
            <Flag size={14} />
          </div>
        ) : item.noteType === "warning" ? (
          <div className="flex items-center gap-1.5 text-xs font-medium text-amber-700 transition-colors duration-200 hover:text-amber-800">
            <AlertTriangle size={13} />
            {item.note}
          </div>
        ) : (
          <input
            type="text"
            value={noteValue}
            onChange={(e) => setNoteValue(e.target.value)}
            placeholder={item.note || "Add a open note (optional)"}
            className="w-full rounded-lg border border-border bg-white px-3 py-1.5 text-xs text-text-main placeholder:text-gray-400 transition-colors duration-200 hover:border-primary focus:border-primary focus:outline-none"
          />
        )}
      </div>
    </div>
  );
}
