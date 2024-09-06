import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { IChildrenProps } from '../../types/auxProps';

export const AnimatedSection = ({
  children,
  position,
}: IChildrenProps & { position: 'down' | 'up' }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // animação ocorre apenas uma vez
    threshold: 0.1, // porcentagem do elemento visível antes de disparar
  });
  if (position === 'down') {
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: 100 }} // começa invisível e à direita
        animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 100 }} // animação quando entra na viewport
        transition={{ duration: 0.5 }}
        style={{ willChange: 'transform' }} // Previne mudanças bruscas de layout
      >
        {children}
      </motion.div>
    );
  }
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100, x: 0 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 100 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};
