import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled.div`
  padding: 0.5rem;
`;

export const Wrapper = styled(motion.div)`
  display: flex;
  gap: 1rem;
  align-items: baseline;
`;
