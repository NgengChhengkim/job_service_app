import {Navigation} from "react-native-navigation";
import {iconsMap, iconsLoaded} from "./../config/Icons";
import I18n from "./../i18n/i18n";

const handleResetScreen = (navigator, screen, navBarHidden = false) => {
  navigator.resetTo({
    screen: screen,
    navigatorStyle: {
      navBarHidden: navBarHidden
    }
  });
}

const handlePushScreen = (navigator, screen, title) => {
  navigator.push({
    screen: screen,
    title: title
  });
}

const switchToTabScreen = () => {
  iconsLoaded.then(() => {
    Navigation.startTabBasedApp({
      tabs: [
        {
          label: I18n.t("tabMenu.home"),
          screen: "job_feed.index",
          icon: iconsMap["home"],
          title: I18n.t("tabMenu.home")
        },
        {
          label: I18n.t("tabMenu.recommended"),
          screen: "registration.index",
          icon: iconsMap["briefcase"],
          title: I18n.t("tabMenu.recommended")
        },
        {
          label: I18n.t("tabMenu.chat"),
          screen: "registration.index",
          icon: iconsMap["comments"],
          title: I18n.t("tabMenu.chat")
        },
        {
          label: I18n.t("tabMenu.setting"),
          screen: "registration.index",
          icon: iconsMap["cog"],
          title: I18n.t("tabMenu.setting")
        }
      ],
      appStyle: {
        forceTitlesDisplay: true,
        tabBarBackgroundColor: "#ffffff",
        navBarTextColor: "#ffffff",
        navBarBackgroundColor: "#ff4081"
      }
    });
  });
}

const openModal = (navigator, screen, params = {}) => {
  navigator.showModal({
    screen: screen,
    backButtonHidden: true,
    passProps: params,
    navigatorStyle: {
      navBarTextColor: "#ffffff",
      navBarButtonColor: "#ffffff",
      navBarBackgroundColor: "#ff4081"
    }
  })
}

const closeModal = (navigator) => {
  navigator.dismissModal({
    animationType: "slide-down"
  });
}

export {handleResetScreen, handlePushScreen, switchToTabScreen, openModal, closeModal};
