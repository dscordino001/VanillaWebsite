window.onload = function() {
    // Try to read from local storage, otherwise set to default
    let currentTheme = localStorage.getItem("mytheme") || "default";
  
    const themeSelector = document.getElementById("theme-selector");
    console.log("Attaching to ",themeSelector);
  
    // Set the theme that we read from local storage
    setTheme("default", currentTheme);
    themeSelector.value = currentTheme;
  
    // Add change event listener
    themeSelector.addEventListener("change", function(e) {
      // Get the user's choice from the event object `e`.
      const newTheme = e.currentTarget.value;
  
      // Set the theme
      setTheme(currentTheme, newTheme);
    });
  
    function setTheme(oldTheme, newTheme) {
      const body = document.getElementsByTagName("body")[0];
  
        console.log("changing theme from ",oldTheme," to ", newTheme);
      // Remove old theme scope from body's class list
      body.classList.remove(oldTheme);
  
      // Add new theme scope to body's class list
      body.classList.add(newTheme);
  
      // Set it as current theme
      currentTheme = newTheme;
  
      // Store the new theme in local storage
      localStorage.setItem("mytheme", newTheme);
    }
  };