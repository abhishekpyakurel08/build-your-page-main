import fonepayQr from "@/assets/fonepay-qr.png";
import { motion } from "framer-motion";
import { Download, QrCode, MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "9779868147709"; // Nepal country code included

const Index = () => {
  const coursePdfUrl =
    typeof window !== "undefined"
      ? `${window.location.origin}/AIcoursePackage_1.pdf`
      : "/AIcoursePackage_1.pdf";

  const whatsappMessage = encodeURIComponent(
    `Hello Tecobit Academy,

I am interested in your AI, Data Science & MLOps courses.

Please share more details.

Course Package: ${coursePdfUrl}`
  );

  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-lg w-full text-center space-y-8"
      >
        {/* Header */}
        <div>
          <h1 className="font-display text-2xl font-bold text-foreground mb-1">
            Tecobit Academy
          </h1>
          <p className="text-muted-foreground text-sm">
            Scan to pay · Download course details
          </p>
        </div>

        {/* QR Payment Card */}
        <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
          <div className="flex items-center justify-center gap-2 mb-4">
            <QrCode className="w-4 h-4 text-accent" />
            <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              FonePay Payment
            </span>
          </div>

          <img
            src={fonepayQr}
            alt="FonePay QR Code for Tecobit Technology Pvt. Ltd."
            className="w-full max-w-[280px] mx-auto rounded-lg"
          />

          <p className="mt-3 text-xs text-muted-foreground">
            TECOBIT TECHNOLOGY PVT. LTD. · New Baneshwor
          </p>
        </div>

        {/* Download PDF Button */}
        <a
          href="/AIcoursePackage_1.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl gradient-accent text-accent-foreground font-medium text-sm hover:opacity-90 transition-opacity"
        >
          <Download className="w-4 h-4" />
          View Course Package (PDF)
        </a>

        {/* WhatsApp Chat Button */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-green-600 text-white font-medium text-sm hover:opacity-90 transition-opacity"
        >
          <MessageCircle className="w-4 h-4" />
          Chat on WhatsApp
        </a>

        {/* Course Pricing Table */}
        <div className="w-full rounded-2xl border border-border bg-card p-6 shadow-sm text-left">
          <h2 className="font-display text-xl font-bold text-card-foreground mb-4 text-center">
            Course Packages
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th
                    rowSpan={2}
                    className="py-2 pr-2 text-left font-semibold text-card-foreground"
                  >
                    Course
                  </th>
                  <th
                    colSpan={2}
                    className="py-2 px-2 text-center font-semibold text-card-foreground border-l border-border"
                  >
                    Standard
                  </th>
                  <th
                    colSpan={2}
                    className="py-2 px-2 text-center font-semibold text-card-foreground border-l border-border"
                  >
                    Premium
                  </th>
                </tr>
                <tr className="border-b border-border">
                  <th className="py-2 px-2 text-center text-muted-foreground font-medium border-l border-border">
                    Actual
                  </th>
                  <th className="py-2 px-2 text-center text-muted-foreground font-medium">
                    Discount
                  </th>
                  <th className="py-2 px-2 text-center text-muted-foreground font-medium border-l border-border">
                    Actual
                  </th>
                  <th className="py-2 px-2 text-center text-muted-foreground font-medium">
                    Discount
                  </th>
                </tr>
              </thead>

              <tbody>
                {[
                  { name: "AI", std: 30000, stdD: 15000, pre: 70000, preD: 35000 },
                  {
                    name: "Data Science",
                    std: 30000,
                    stdD: 15000,
                    pre: 70000,
                    preD: 35000,
                  },
                  { name: "MLOPs", std: 30000, stdD: 15000, pre: 70000, preD: 35000 },
                ].map((course) => (
                  <tr
                    key={course.name}
                    className="border-b border-border last:border-0"
                  >
                    <td className="py-2.5 pr-2 font-medium text-card-foreground">
                      {course.name}
                    </td>

                    <td className="py-2.5 px-2 text-center text-muted-foreground line-through border-l border-border">
                      Rs.{course.std.toLocaleString()}
                    </td>

                    <td className="py-2.5 px-2 text-center font-semibold text-primary">
                      Rs.{course.stdD.toLocaleString()}
                    </td>

                    <td className="py-2.5 px-2 text-center text-muted-foreground line-through border-l border-border">
                      Rs.{course.pre.toLocaleString()}
                    </td>

                    <td className="py-2.5 px-2 text-center font-semibold text-primary">
                      Rs.{course.preD.toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4 space-y-1 text-xs text-muted-foreground">
            <p>
              • Discount price valid for webinar attendees only — payment within 2 days.
            </p>
            <p>
              • Instant payment gets Rs.1,000 extra discount on each course.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Index;