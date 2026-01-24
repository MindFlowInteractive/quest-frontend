import type { ActivityItem } from "@/types";

type Props = {
  activities: ActivityItem[];
};

export const RecentActivity = ({ activities }: Props) => {
  return (
    <section className="w-full text-white p-4">
      <h2 className="text-xl font-medium mb-4 uppercase tracking-wide border-b border-gray-700/50 pb-2 inline-block text-[#CFFDED]">
        Recent
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className="flex items-center gap-4 bg-[#141516] border border-[#323336] rounded-lg p-4 hover:bg-[#1a1b1c] transition-colors"
          >
            {/* Image Placeholder */}
            <div className="w-24 h-24 shrink-0">
              <img
                src={activity.image}
                alt={activity.mode}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <h3 className="text-gray-300 font-medium truncate">
                {activity.mode}
              </h3>
              <p className="text-gray-500 text-sm mb-3">
                Level {activity.level}
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-1 text-sm text-gray-400">
                {/* Row 1: Group Size */}
                <div className="flex items-center gap-2">
                  <img src="/call.svg" alt="call" className="w-4" />
                </div>
                <div className="flex justify-end gap-2 items-center">
                  <span>{activity.groupSize}</span>
                  <span className="text-yellow-500">🏆</span>
                </div>

                {/* Row 2: Participants */}
                <div className="flex items-center gap-2">
                  <img src="/audience.svg" alt="audience" className="w-4" />
                </div>
                <div className="flex justify-end gap-2 items-center">
                  <span>{activity.participants}</span>
                  <span className="text-yellow-500">🏆</span>
                </div>

                {/* Row 3: Coins & Earnings */}
                <div className="flex items-center gap-1">
                  <img src="/50-50.svg" alt="50:50" className="w-10" />
                </div>
                <div className="flex justify-end gap-2 items-center">
                  <span>{activity.earnings}</span>
                  <span className="text-yellow-500">🏆</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
