import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { IChildrenProps } from '../../types/auxProps';

export const AnimatedSection = ({
  children,
  direction,
}: IChildrenProps & {
  direction: 'toRight' | 'toLeft' | 'toUp' | 'toDown' | null;
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // animação ocorre apenas uma vez
    threshold: 0.1, // porcentagem do elemento visível antes de disparar
  });
  if (direction === 'toRight') {
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: -100 }} // começa invisível e à direita
        animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -100 }} // animação quando entra na viewport
        transition={{ duration: 0.5, ease: 'easeIn' }}
        style={{ willChange: 'transform' }} // Previne mudanças bruscas de layout
      >
        {children}
      </motion.div>
    );
  } else if (direction === 'toLeft') {
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 100 }}
        transition={{ duration: 0.5, ease: 'easeIn' }}
        style={{ willChange: 'transform' }}
      >
        {children}
      </motion.div>
    );
  } else if (direction === 'toUp') {
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 100 }}
        transition={{ duration: 0.5, ease: 'easeIn' }}
        style={{ position: 'relative' }}
      >
        {children}
      </motion.div>
    );
  } else if (direction === 'toDown') {
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -100 }}
        transition={{ duration: 0.5, ease: 'easeIn' }}
        style={{ willChange: 'transform' }}
      >
        {children}
      </motion.div>
    );
  } else {
    return children;
  }
};
