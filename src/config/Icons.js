import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const replaceSuffixPattern = /--(active|big|small|very-big)/g;
const icons = {
  // Default Icon provider: ionicons
  // "ios-home": [30, "#bbb"],

  // Use other Icon provider
  "home": [30, "#bbb", FontAwesome],
  "briefcase": [30, "#bbb", FontAwesome],
  "comments": [30, "#bbb", FontAwesome],
  "cog": [30, "#bbb", FontAwesome],
}

const defaultIconProvider = Ionicons;

let iconsMap = {};
let iconsLoaded = new Promise((resolve, reject) => {
  new Promise.all(
    Object.keys(icons).map(iconName => {
      const Provider = icons[iconName][2] || defaultIconProvider;
      return Provider.getImageSource(
        iconName.replace(replaceSuffixPattern, ""),
        icons[iconName][0],
        icons[iconName][1]
      )
    })
  ).then(sources => {
    Object.keys(icons)
      .forEach((iconName, idx) => iconsMap[iconName] = sources[idx])
    resolve(true);
  })
});

export {iconsMap, iconsLoaded};
