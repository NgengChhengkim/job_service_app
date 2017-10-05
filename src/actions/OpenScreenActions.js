export const handleResetScreen = (navigator, screen, navBarHidden = false) => {
  return () => {
    navigator.resetTo({
      screen: screen,
      navigatorStyle: {
        navBarHidden: navBarHidden
      }
    });
  }
}

export const handlePushScreen = (navigator, screen, title) => {
  return () => {
    navigator.push({
      screen: screen,
      title: title
    });
  }
}
