"use client";

import { motion } from "motion/react";
import Image from "next/image";

export default function Team() {
  return (
    <section className="py-24 bg-[#F5F2E8]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-4"
        >
          <span className="text-[#8A6E4B] text-xs font-semibold uppercase tracking-widest">
            The Team
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-3xl sm:text-4xl font-bold text-[#1F3D2B] text-center leading-tight mb-14"
        >
          The people behind the system.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex justify-center"
        >
          <div className="bg-white rounded-2xl p-8 border border-[#1F3D2B]/8 shadow-sm text-center w-full max-w-xs">
            <div className="mb-5 flex justify-center">
              <div className="w-28 h-28 rounded-xl overflow-hidden shadow-md">
                <Image
                  src="/ceo.png"
                  alt="Akhil Uchil"
                  width={112}
                  height={112}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            <h3 className="text-[#1F3D2B] text-xl font-bold mb-1">
              Akhil Uchil
            </h3>
            <p className="text-[#8A6E4B] text-sm font-semibold mb-3">
              CEO &amp; Founder
            </p>
            <p className="text-[#666666] text-sm leading-relaxed">
              Helping small businesses grow through systems that work while
              you focus on the work.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
