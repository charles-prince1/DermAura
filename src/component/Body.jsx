import { useState, useRef } from "react";
import {
    FiCloudLightning,
    FiAlertCircle,
    FiCreditCard,
    FiUser,
    FiLayers,
    FiUploadCloud,
    FiCheckCircle,
    FiClock,
    FiAlertTriangle,
} from "react-icons/fi";

function FeedBackBody({ value }) {
    const {
        issueType,
        setIssueType,
        description,
        setDescription,
        isSubmitted,
        setIsSubmitted,
        screenshot,
        setScreenshot,
        recent,
        setRecent,
        active,
        setActive,
        detail,
        handleDetails,
        isEmeergency,
    } = value;

    const fileInputRef = useRef(null);

    const categories = [
        {
            id: "login",
            label: "Login Issue",
            icon: <FiCloudLightning className="text-amber-500" size={20} />,
        },
        {
            id: "payment",
            label: "Payment Issue",
            icon: <FiCreditCard className="text-emerald-500" size={20} />,
        },
        {
            id: "account",
            label: "Account Issue",
            icon: <FiUser className="text-blue-500" size={20} />,
        },
        {
            id: "other",
            label: "Other/General",
            icon: <FiLayers className="text-purple-500" size={20} />,
        },
    ];

    const getBadgeStyle = (category) => {
        switch (category) {
            case "login":
                return "bg-amber-50 text-amber-700 border-amber-200";
            case "payment":
                return "bg-emerald-50 text-emerald-700 border-emerald-200";
            case "account":
                return "bg-blue-50 text-blue-700 border-blue-200";
            default:
                return "bg-purple-50 text-purple-700 border-purple-200";
        }
    };

    const handleFileChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setScreenshot(e.target.files[0]);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!issueType || !description) {
            return (<div className="flex-1 fixed top-0 bg-gray-50 flex items-center justify-center p-4 min-h-screen">
                <div className="bg-white p-6 md:p-8 rounded-xl shadow-md max-w-md w-full text-center border border-gray-100">
                    <FiAlertTriangle size={24} className="text-yellow-200" />
                    <p>please select an issue type and provide a description</p>
                </div>
            </div>)
          
        }

        const newHistory = {
            id: Date.now(),
            category: issueType,
            description: description,
            file: screenshot?.name || "No file uploaded",
        };
        console.log(Date.now());
        setRecent((newChat) => [newHistory, ...newChat]);

        setIsSubmitted(true);
    };

    const handleReset = () => {
        setIssueType("");
        setDescription("");
        setScreenshot(null);
        setIsSubmitted(false);
    };

    // Success Screen View
    if (isSubmitted) {
        return (
            <div className="flex-1 bg-gray-50 flex z-50 items-center justify-center p-4 min-h-screen">
                <div className="bg-white p-6 md:p-8 rounded-xl shadow-md max-w-md w-full text-center border border-gray-100">
                    <FiCheckCircle size={48} className="text-emerald-500 mx-auto mb-4" />
                    <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
                        Feedback Received!
                    </h2>
                    <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                        Thank you for reporting this issue. Our technical team has been
                        notified and will look into it right away.
                    </p>
                    <button
                        onClick={handleReset}
                        className="w-full sm:w-auto bg-gray-900 text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-800 transition duration-200"
                    >
                        Submit Another Report
                    </button>
                </div>
            </div>
        );
    }

    // Main Layout View
    return (
        <div className="flex-1 bg-gray-50 min-h-screen flex flex-col">
            {/* FIXED TOP NAVIGATION HEADER FOR MOBILE */}
            <div className="sticky top-0 left-0 right-0 h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4 sm:px-6 z-30  shrink-0">
                <div className="flex flex-col">
                    <span className="text-gray-900 font-bold text-base tracking-tight leading-none mb-0.5">
                        Feedback Hub
                    </span>
                    <span className="text-gray-400 text-[11px] font-medium tracking-wide">
                        {active}
                    </span>
                </div>

                <div className="flex items-center gap-1.5 bg-zinc-950 text-white text-[11px] font-medium px-2.5 py-1 rounded-full shadow-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Portal Active
                </div>
            </div>

            {/* INNER CONTENT CONTAINER */}
            <div className="p-4 sm:p-6 md:p-10 flex-1 overflow-y-auto">
                {active === "CREATE REPORT" && (
                    <div className="max-w-3xl mx-auto">
                        {/* Header */}
                        <div className="mb-6 md:mb-8">
                            <h1 className="text-xl md:text-2xl font-bold text-gray-900 flex items-center gap-2">
                                <FiAlertCircle className="text-gray-700" /> Report an Issue
                            </h1>
                            <p className="text-xs md:text-sm text-gray-500 mt-1">
                                Ran into trouble? Let us know what went wrong so we can fix it
                                for you.
                            </p>
                        </div>

                        <form
                            onSubmit={handleSubmit}
                            className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 md:p-8 space-y-5 md:space-y-6"
                        >
                            {/* Step 1: Select Category */}
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-3">
                                    1. What kind of issue are you facing?{" "}
                                    <span className="text-red-500">*</span>
                                </label>
                                {/* Mobile responsive grids: 1 col on mobile, 2 on tablet, 4 on desktop */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                                    {categories.map((cat) => (
                                        <button
                                            key={cat.id}
                                            type="button"
                                            onClick={() => setIssueType(cat.id)}
                                            className={`flex items-center gap-3 p-3 rounded-xl border text-left transition-all duration-200 w-full ${issueType === cat.id
                                                ? "border-gray-900 bg-gray-900 text-white shadow-sm"
                                                : "border-gray-200 bg-white text-gray-700 hover:border-gray-300 hover:bg-gray-50"
                                                }`}
                                        >
                                            <span
                                                className={issueType === cat.id ? "text-white" : ""}
                                            >
                                                {cat.icon}
                                            </span>
                                            <span className="text-sm font-medium truncate">
                                                {cat.label}
                                            </span>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Step 2: Description */}
                            <div>
                                <label
                                    htmlFor="description"
                                    className="block text-sm font-semibold text-gray-700 mb-2"
                                >
                                    2. Describe the problem{" "}
                                    <span className="text-red-500">*</span>
                                </label>
                                <textarea
                                    id="description"
                                    rows={5}
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    placeholder="Please provide details like what you clicked, what error messages you saw, or how to replicate the issue..."
                                    className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:border-gray-900 focus:ring-1 focus:ring-gray-900 outline-none transition duration-200"
                                />
                            </div>

                            {/* Step 3: Screenshot Upload */}
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    3. Upload a screenshot (Optional)
                                </label>

                                <input
                                    type="file"
                                    ref={fileInputRef}
                                    onChange={handleFileChange}
                                    accept="image/*"
                                    className="hidden"
                                />

                                <div
                                    onClick={() => fileInputRef.current.click()}
                                    className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center cursor-pointer hover:border-gray-400 hover:bg-gray-50 transition duration-200"
                                >
                                    <FiUploadCloud
                                        size={32}
                                        className="mx-auto text-gray-400 mb-2"
                                    />
                                    {screenshot ? (
                                        <div className="text-sm font-medium text-emerald-600 truncate max-w-full px-2">
                                            Selected:{" "}
                                            <span className="underline">{screenshot.name}</span>
                                        </div>
                                    ) : (
                                        <>
                                            <p className="text-sm font-medium text-gray-700">
                                                Click to upload file
                                            </p>
                                            <p className="text-xs text-gray-400 mt-1">
                                                PNG, JPG or JPEG up to 5MB
                                            </p>
                                        </>
                                    )}
                                </div>
                            </div>

                            <hr className="border-gray-100" />

                            {/* Actions buttons stack cleanly on narrow mobile dimensions */}
                            <div className="flex flex-col-reverse sm:flex-row items-center justify-end gap-2.5 pt-2">
                                <button
                                    type="button"
                                    onClick={handleReset}
                                    className="w-full sm:w-auto px-5 py-2.5 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-100 transition duration-200 text-center"
                                >
                                    Clear Form
                                </button>
                                <button
                                    type="submit"
                                    className="w-full sm:w-auto px-6 py-2.5 rounded-lg text-sm font-semibold text-white bg-gray-950 hover:bg-gray-800 shadow-sm transition duration-200 text-center"
                                >
                                    Submit Feedback
                                </button>
                            </div>
                        </form>
                    </div>
                )}
                {active === "TICKET LOGS" && (
                    <div className="max-w-4xl mx-auto">
                        {/* Header */}
                        <div className="mb-6 md:mb-8">
                            <h1 className="text-xl md:text-2xl font-bold text-gray-900 flex items-center gap-2">
                                <FiClock className="text-gray-700" size={24} /> Ticket History
                            </h1>
                            <p className="text-xs md:text-sm text-gray-500 mt-1">
                                Track the progression, status logs, and details of all your
                                submitted tickets.
                            </p>
                        </div>

                        {/* Empty State vs Table Condition */}
                        {recent.length === 0 ? (
                            <div className="bg-white rounded-xl border border-gray-200 p-8 md:p-12 text-center shadow-sm">
                                <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4 border border-gray-100">
                                    <FiClock className="text-gray-400" size={20} />
                                </div>
                                <h3 className="text-base font-semibold text-gray-800 mb-1">
                                    No feedback tickets yet
                                </h3>
                                <p className="text-gray-400 text-xs md:text-sm max-w-xs mx-auto">
                                    Once you submit an issue through the report form, its active
                                    status logs will reflect here.
                                </p>
                            </div>
                        ) : (
                            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                                <div className="divide-y divide-gray-100">
                                    {recent.map((ticket) => (
                                        <div
                                            key={ticket.id}
                                            className="cursor-pointer p-4 md:p-6 hover:bg-gray-50/40 transition duration-150 flex flex-col md:flex-row md:items-start justify-between gap-4"
                                        >
                                            <div className="space-y-2.5 flex-1 min-w-0">
                                                {/* Top Meta Details Row */}
                                                <div className="flex items-center gap-2 flex-wrap">
                                                    <span
                                                        className={`px-2.5 py-0.5 rounded-full text-[10px] md:text-xs font-semibold uppercase border ${getBadgeStyle(ticket.category)}`}
                                                    >
                                                        {ticket.category}
                                                    </span>
                                                    <span className="text-[11px] md:text-xs text-gray-400 font-medium">
                                                        ID: #{String(ticket.id).slice(-6)}
                                                    </span>
                                                </div>

                                                {/* Description Text */}

                                                <p className="text-xs md:text-sm text-gray-700 leading-relaxed break-words">
                                                    {ticket.description}
                                                </p>

                                                <p
                                                    onClick={() => handleDetails(ticket.id)}
                                                    className="text-xs md:text-sm text-gray-700 leading-relaxed"
                                                >
                                                    {detail ? "show Less" : "show More"}
                                                </p>
                                                {/* Attachment Badge */}
                                                {ticket.file && ticket.file !== "No file uploaded" && (
                                                    <div className="inline-flex items-center gap-1.5 bg-gray-50 border border-gray-200 text-gray-500 px-2 py-0.5 rounded text-xs max-w-full">
                                                        <FiUploadCloud size={12} className="shrink-0" />
                                                        <span className="truncate max-w-[200px] sm:max-w-md">
                                                            {ticket.file}
                                                        </span>
                                                    </div>
                                                )}
                                            </div>

                                            {/* Status Column & Clock Details */}
                                            <div className="flex flex-row md:flex-col items-center md:items-end justify-between md:justify-start gap-2 pt-3 md:pt-0 border-t md:border-t-0 border-gray-100 shrink-0">
                                                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-100">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                                                    Active
                                                </span>
                                                <span className="text-xs text-gray-400 font-medium">
                                                    {new Date(ticket.id).toLocaleDateString(undefined, {
                                                        month: "short",
                                                        day: "numeric",
                                                    })}
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                )}
                {active === "EMERGENCY" && (
                    <div className="max-w-4xl mx-auto">
                        {isEmeergency ? (
                            <div className="w-full flex flex-col rounded-lg  h-[100vh]">
                                <h1 className="text-xl md:text-2xl font-bold text-red-900/90 flex items-center gap-2">
                                    <FiAlertTriangle className="text-red-500" size={24} />{" "}
                                    Emergency Queue
                                </h1>
                            </div>
                        ) : (
                            <div className="w-full flex flex-col rounded-lg  h-[100vh]">
                                <h1 className="text-xl md:text-2xl font-bold text-red-900/90 flex items-center gap-2">
                                    <FiAlertTriangle className="text-red-500" size={24} />{" "}
                                    Emergency Queue
                                </h1>
                                <p className="text-[11px] text-gray-500">
                                    Track of every emergency, status logs.
                                </p>
                                <div className="cursor-pointer border border-gray-300 py-8 mt-5 bg-white rounded-lg items-center flex flex-col">
                                    <div className="w-19 h-19 items-center bg-black rounded-full flex items-center justify-center p-2 mx-auto mb-4 border border-gray-100">
                                        <FiAlertTriangle
                                            size={50}
                                            className="mt-5 mb-4 text-red-500"
                                        />
                                    </div>
                                    <p className="text-sm md:text-[13px] font-semibold ">No service available</p>
                                    <p className="text-gray-500 text-sm">
                                        We will get back to you, anticipate ...
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                )}

                {active === "SETTINGS" && (
                    <div className="max-w-4xl mx-auto">

                    </div>
                )}
            </div>
        </div>
    );
}

export default FeedBackBody;
