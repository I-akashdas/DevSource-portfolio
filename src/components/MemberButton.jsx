import { motion } from "framer-motion";

export default function MemberButton({ name, link }) {
  return (
    <motion.a
      href={link}
      className="member-btn"
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 220 }}
    >
      {name}
    </motion.a>
  );
}
