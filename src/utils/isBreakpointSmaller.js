const isBreakpointSmaller = (currentBreakpoint, comparedBreakpoint) => {
  const comparedBreakpointAsNumber = parseInt(
    comparedBreakpoint.replace(/px/g, '')
  )
  return currentBreakpoint < comparedBreakpointAsNumber
}

export default isBreakpointSmaller
