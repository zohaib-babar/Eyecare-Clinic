import { Link } from "react-router-dom";
import EyeArt from "../ui/EyeArt.jsx";

/**
 * One card, three looks:
 *  - default:   white card, a navy fill rises from the bottom on hover
 *  - featured:  permanently dark, with the iris turning slowly in the corner
 *  - detailed:  also lists what is included (used on the Services page)
 */
export default function ServiceCard({
  service,
  featured = false,
  detailed = false,
  cta = { label: "View services", to: "/services" },
  className = "",
}) {
  const { title, meta, summary, points } = service;

  return (
    <article
      className={`group relative isolate flex flex-col overflow-hidden rounded-[1.75rem] p-7 transition-shadow duration-500 hover:shadow-lift sm:p-9 ${
        featured ? "bg-navy-900 text-white/75" : "bg-white text-slate-600 ring-1 ring-navy-900/10"
      } ${className}`}
    >
      {featured ? (
        <div className="absolute -bottom-32 -right-32 -z-10 h-[26rem] w-[26rem] overflow-hidden rounded-full opacity-50 transition-transform duration-[1400ms] ease-out group-hover:rotate-12 group-hover:scale-110">
          <EyeArt className="h-full w-full" />
        </div>
      ) : (
        // The fill that rises on hover
        <span
          aria-hidden="true"
          className="absolute inset-0 -z-10 translate-y-full bg-gradient-to-br from-navy-800 to-navy-950 transition-transform duration-500 ease-out group-hover:translate-y-0"
        />
      )}

      <p
        className={`text-sm font-semibold transition-colors duration-500 ${
          featured ? "text-aqua-300" : "text-aqua-700 group-hover:text-aqua-300"
        }`}
      >
        {meta}
      </p>

      <h3
        className={`${featured ? "mt-16 text-4xl sm:text-5xl lg:mt-auto" : "mt-8 text-3xl"} leading-[1.08] transition-colors duration-500 ${
          featured ? "!text-white" : "group-hover:!text-white"
        }`}
      >
        {title}
      </h3>

      <p
        className={`mt-4 leading-relaxed transition-colors duration-500 ${
          featured ? "max-w-md" : "group-hover:text-white/75"
        }`}
      >
        {summary}
      </p>

      {detailed && (
        <ul
          className={`mt-6 space-y-2.5 border-t pt-5 text-sm transition-colors duration-500 ${
            featured ? "border-white/15" : "border-navy-900/10 group-hover:border-white/20"
          }`}
        >
          {points.map((point) => (
            <li key={point} className="flex items-start gap-3">
              <span className="mt-2.5 h-px w-4 shrink-0 bg-aqua-500" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      )}

      <Link
        to={cta.to}
        className={`mt-8 inline-flex items-center gap-3 self-start text-sm font-semibold transition-colors duration-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-aqua-400 ${
          featured ? "text-white" : "text-navy-900 group-hover:text-white"
        }`}
      >
        {cta.label}
        <span className="h-px w-8 bg-current transition-all duration-500 group-hover:w-16" />
      </Link>
    </article>
  );
}
