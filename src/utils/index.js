export const cv = (baseClasses, variantMap) => {
  return (params = {}) => {
    if (params.class) return params.class;
    const classNames = baseClasses.split(" ");
    const keys = Object.keys(params);
    if (keys.length) {
      for (const prop in params) {
        if (variantMap[prop] && variantMap[prop][params[prop]]) {
          classNames.push(variantMap[prop][params[prop]]);
        }
      }
    } else {
      for (const prop in variantMap.default) {
        if (variantMap[prop]) {
          classNames.push(variantMap[prop][variantMap.default[prop]]);
        }
      }
    }
    return classNames.join(" ");
  };
};

export function clickOutside(node, { enabled: initialEnabled, cb }) {
  const handleOutsideClick = ({ target }) => {
    if (!node.contains(target)) {
      cb();
    }
  };

  function update({ enabled }) {
    if (enabled) {
      window.addEventListener("click", handleOutsideClick);
    } else {
      window.removeEventListener("click", handleOutsideClick);
    }
  }

  update({ enabled: initialEnabled });
  return {
    update,
    destroy() {
      window.removeEventListener("click", handleOutsideClick);
    },
  };
}
