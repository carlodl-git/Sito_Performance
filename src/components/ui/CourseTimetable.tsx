import { schedule, scheduleDays, golfCourses } from "@/data/courses";

/**
 * Calendario settimanale dei corsi. Al posto dei riempimenti pastello per
 * corso, una sola tinta tenue per le celle occupate: la tabella si legge per
 * densità, non per colore.
 */
export function CourseTimetable() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[720px] border-collapse text-left">
        <thead>
          <tr className="border-b border-line">
            <th scope="col" className="eyebrow py-4 pr-4 font-medium">
              Ora
            </th>
            {scheduleDays.map((day) => (
              <th
                key={day}
                scope="col"
                className="eyebrow px-3 py-4 font-medium"
              >
                {day}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {schedule.map((row) => (
            <tr key={`${row.start}-${row.end}`} className="border-b border-line">
              <th
                scope="row"
                className="whitespace-nowrap py-5 pr-4 align-top text-left font-normal"
              >
                <span className="block text-sm font-medium text-primary">
                  {row.start}
                </span>
                <span className="block text-xs text-muted">→ {row.end}</span>
              </th>
              {row.courses.map((course, i) => (
                <td key={i} className="px-1.5 py-2 align-middle">
                  {course ? (
                    <div className="rounded-sm bg-paper-alt px-3 py-3 text-[0.8125rem] leading-snug text-primary">
                      {golfCourses.includes(course) && (
                        <span
                          className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-accent align-middle"
                          aria-hidden
                        />
                      )}
                      {course}
                    </div>
                  ) : (
                    <span className="block px-3 text-center text-neutral-300" aria-hidden>
                      ·
                    </span>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
