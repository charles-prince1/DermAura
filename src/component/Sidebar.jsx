import { FaBars, FaHistory, FaTimes } from "react-icons/fa";
import {
  FiMessageCircle,
  FiMessageSquare,
  FiActivity,
  FiSettings,
  FiAlertTriangle,
} from "react-icons/fi";

function FeedBackSideBar({ values }) {
  const {
    extended,
    handleToggle,
    recent,
    setActive,
    setExtended,
    isSubmitted,
    setIsSubmitted,
    setDescription,
    setIssueType,
    setScreenshot,
  } = values;

  const closeMobileSidebarOnNavigate = () => {
    if (window.innerWidth < 768) {
      setExtended(false);
    }
  };

  const handleHistory = () => {
    setIsSubmitted(false);
    setActive("TICKET LOGS");
    closeMobileSidebarOnNavigate();
  };
  const handleEmergency = () => {
    setActive("EMERGENCY");
    setDescription("");
    setIssueType("");
    setScreenshot(null);
    setIsSubmitted(false);
    closeMobileSidebarOnNavigate();
  };
  const handleSettings = () => {
    setActive("SETTINGS");
    // setDescription("");
    // setIssueType("");
    // setScreenshot(null);
    // setIsSubmitted(false);
    closeMobileSidebarOnNavigate();
  };
  const handleReport = () => {
    setActive("CREATE REPORT");
    setDescription("");
    setIssueType("");
    setScreenshot(null);
    setIsSubmitted(false);
    closeMobileSidebarOnNavigate();
  };

  const styles = `flex items-center py-2.5 px-3 gap-3 hover:bg-green-800/40 rounded-lg cursor-pointer transition-all duration-200 border border-transparent`;

  return (
    <>
      {/* 1. FIXED TOP NAV FOR MOBILE: Displays only on small screens when sidebar is closed */}
      {!extended && (
        <div className="fixed top-0 left-0 right-0 h-16 bg-black flex items-center px-4 z-40 md:hidden border-b border-zinc-800">
          <button
            onClick={handleToggle}
            className="p-2 rounded-lg hover:bg-green-800/40 text-gray-400 border-none cursor-pointer outline-none"
          >
            <FaBars size={24} />
          </button>
          <span className="ml-3 text-white font-medium text-sm">
            Feedback System
          </span>
        </div>
      )}

      {/* MOBILE OVERLAY BACKGROUND */}
      {extended && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden backdrop-blur-xs transition-opacity"
          onClick={handleToggle}
        />
      )}

      {/* MAIN SIDEBAR CONTAINER */}
      <div
        className={`
                fixed top-0 bottom-0 left-0 z-50 md:sticky h-screen p-4 flex flex-col justify-between bg-black text-white transition-all duration-300
                ${extended ? "w-64 translate-x-0" : "w-20 -translate-x-full md:translate-x-0"}
            `}
      >
        {/* Top Section */}
        <section className="w-full flex flex-col items-start min-h-0 flex-1">
          {/* Menu Toggle Button (Inside Sidebar) */}
          <div className="w-full flex justify-between items-center">
            <button
              className="p-2 rounded-lg hover:bg-green-800/40 transition-colors border-none outline-none cursor-pointer"
              onClick={handleToggle}
            >
              {extended ? (
                <FaTimes size={24} className="text-red-500" />
              ) : (
                <FaBars size={24} className="text-gray-400" />
              )}
            </button>
          </div>

          {/* Report Issue Action */}
          <div
            onClick={handleReport}
            className={`flex items-center gap-2 bg-green-800 hover:bg-green-700 rounded-full mt-6 py-2.5 px-3.5 border border-gray-600 cursor-pointer w-fit max-w-full overflow-hidden shadow-md shrink-0 transition-colors`}
          >
            <FiMessageCircle size={22} className="shrink-0" />
            {extended && (
              <span className="text-sm font-medium whitespace-nowrap pr-1">
                Report Issue
              </span>
            )}
          </div>

          {/* Recent Items Section */}
          {extended && (
            <div className="mt-6 w-full flex flex-col min-h-0 flex-1">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-1 mb-2 shrink-0">
                Recents
              </p>

              <div className="flex-col gap-2 flex overflow-y-auto max-h-[45vh] pr-1 scrollbar-thin [scrollbar-width:thin] [scrollbar-color:#16a34a_#18181b]">
                {recent.length === 0 ? (
                  <p className="text-xs text-gray-600 px-1 italic">
                    No recent items
                  </p>
                ) : (
                  recent.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => {
                        setActive("TICKET LOGS");
                        setIsSubmitted(false);
                        closeMobileSidebarOnNavigate();
                      }}
                      className="flex items-center gap-3 bg-zinc-900 rounded-lg border border-green-800/40 px-3 py-2 hover:bg-green-800/30 cursor-pointer transition-colors shrink-0"
                    >
                      <FiMessageSquare
                        className="text-green-500 shrink-0"
                        size={16}
                      />
                      <span className="text-gray-300 text-xs truncate">
                        {`${item.category} issue` || "Recent issue"}
                      </span>
                    </div>
                  ))
                )}
              </div>
            </div>
          )}
        </section>

        {/* Bottom Utilities Navigation */}
        <div className="flex flex-col gap-1.5 w-full pt-4 border-t border-zinc-800 shrink-0">
          {/* Emergency Item */}
          <div className={styles} onClick={handleEmergency}>
            <FiAlertTriangle size={20} className="text-green-500 shrink-0" />
            {extended && (
              <span className="text-gray-300 text-sm whitespace-nowrap">
                Emergency
              </span>
            )}
          </div>

          {/* History Item */}
          <div className={styles} onClick={handleHistory}>
            <FaHistory size={20} className="text-green-500 shrink-0" />
            {extended && (
              <span className="text-gray-300 text-sm whitespace-nowrap">
                History
              </span>
            )}
          </div>

          {/* Settings Item */}
          <div className={styles} onClick={handleSettings}>
            <FiSettings size={20} className="text-green-500 shrink-0" />
            {extended && (
              <span className="text-gray-300 text-sm whitespace-nowrap">
                Settings
              </span>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default FeedBackSideBar;
