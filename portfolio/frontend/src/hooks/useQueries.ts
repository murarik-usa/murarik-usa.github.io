// This file is intentionally minimal as the backend is empty
// All portfolio data is static and rendered directly in components

import { useActor } from './useActor';

// Placeholder hook structure for future backend integration
export function usePortfolioData() {
  const { actor, isFetching } = useActor();

  // Currently all data is static in components
  // This hook can be expanded if backend functionality is added
  
  return {
    actor,
    isFetching,
  };
}
