import fonepayQr from "@/assets/fonepay-qr.png";
import { motion } from "framer-motion";

const PaymentSection = () => (
  <motion.section
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="py-16"
  >
    <div className="max-w-md mx-auto text-center">
      <h2 className="font-display text-3xl font-bold text-foreground mb-2">Pay via FonePay</h2>
      <p className="text-muted-foreground mb-6 text-sm">
        Scan the QR code below to make instant payment. Get Rs.1,000 extra discount on instant payment!
      </p>
      <div className="rounded-2xl border border-border bg-card p-6 shadow-sm inline-block">
        <img
          src={fonepayQr}
          alt="FonePay QR Code for Tecobit Technology Pvt. Ltd."
          className="w-64 h-auto mx-auto rounded-lg"
        />
        <p className="mt-4 text-xs text-muted-foreground">
          TECOBIT TECHNOLOGY PVT. LTD. · New Baneshwor
        </p>
      </div>
    </div>
  </motion.section>
);

export default PaymentSection;
