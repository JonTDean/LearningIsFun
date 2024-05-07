/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
if you want to view the source, please visit the github repository of this plugin
*/

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// main.ts
var main_exports = {};
__export(main_exports, {
  default: () => HeatmapCalendar
});
module.exports = __toCommonJS(main_exports);
var import_obsidian2 = require("obsidian");

// settings.ts
var import_obsidian = require("obsidian");
var HeatmapCalendarSettingsTab = class extends import_obsidian.PluginSettingTab {
  constructor(app, plugin) {
    super(app, plugin);
    this.plugin = plugin;
  }
  addColorMap(color) {
    return __async(this, null, function* () {
      const isValid = { key: true, value: true };
      if (!color.key)
        isValid.key = false;
      const validatedArray = this.validateColorInput(color.value);
      if (!validatedArray)
        isValid.value = false;
      if (isValid.key && isValid.value) {
        this.plugin.settings.colors[color.key] = validatedArray;
        yield this.plugin.saveSettings();
        this.display();
      }
      return isValid;
    });
  }
  deleteColorMap(key) {
    return __async(this, null, function* () {
      delete this.plugin.settings.colors[key];
      yield this.plugin.saveSettings();
      this.display();
    });
  }
  displayColorSettings() {
    const { containerEl } = this;
    containerEl.createEl("h3", { text: "Colors" });
    this.displayColorHelp(containerEl);
    for (const [key, colors] of Object.entries(this.plugin.settings.colors)) {
      const colorEntryContainer = containerEl.createDiv({
        cls: "heatmap-calendar-settings-colors__container"
      });
      const colorDataContainer = colorEntryContainer.createDiv({
        cls: "heatmap-calendar-settings-colors__data-container"
      });
      colorDataContainer.createEl("h4", { text: key });
      const colorRow = colorDataContainer.createDiv({ cls: "heatmap-calendar-settings-colors__row" });
      const colorsContainer = colorRow.createDiv({ cls: "heatmap-calendar-settings-colors__color-container" });
      for (const color of colors) {
        colorsContainer.createEl("div", {
          cls: "heatmap-calendar-settings-colors__color-box",
          attr: {
            style: `background-color: ${color}`
          }
        });
        colorsContainer.createEl("pre", {
          cls: "heatmap-calendar-settings-colors__color-name",
          text: color
        });
      }
      if (key !== "default") {
        const deleteColorButton = colorEntryContainer.createEl("button", {
          cls: "mod-warning heatmap-calendar-settings-colors__delete"
        });
        (0, import_obsidian.setIcon)(deleteColorButton, "trash");
        deleteColorButton.addEventListener("click", () => this.deleteColorMap(key));
      }
    }
    this.displayColorInput(containerEl);
  }
  displayColorInput(parent) {
    const inputContainer = parent.createDiv({ cls: "heatmap-calendar-settings-colors__new-color-input-container" });
    const colorNameInput = inputContainer.createEl("input", {
      cls: "heatmap-calendar-settings-colors__new-color-input-name",
      attr: { placeholder: "Color name", type: "text" }
    });
    const colorValueInput = inputContainer.createEl("input", {
      cls: "heatmap-calendar-settings-colors__new-color-input-value",
      attr: { placeholder: "Colors array", type: "text" }
    });
    const addColorButton = inputContainer.createEl("button", {
      cls: "mod-cta heatmap-calendar-settings-colors__new-color-button"
    });
    (0, import_obsidian.setIcon)(addColorButton, "plus");
    addColorButton.addEventListener("click", () => __async(this, null, function* () {
      const isValid = yield this.addColorMap({
        key: colorNameInput.value,
        value: colorValueInput.value
      });
      this.reportInputValidity(colorNameInput, isValid.key, "Please input a name for your color");
      this.reportInputValidity(colorValueInput, isValid.value, "Color is not a valid JSON array of colors");
    }));
  }
  displayColorHelp(parent) {
    parent.createEl("p", {
      text: "Add lists of colors which will be globally available on your heatmaps."
    });
    parent.createEl("p", {
      text: "You can use those colors by referencing their name in your heatmap render settings."
    });
  }
  reportInputValidity(input, isValid, msg) {
    if (!isValid) {
      input.classList.add("has-error");
      input.setCustomValidity(msg);
    } else
      input.setCustomValidity("");
    input.reportValidity();
  }
  validateColorInput(value) {
    const colorRegex = /^(#[0-9a-f]{3,6}|rgba?\(\s*\d+%?\s*,\s*\d+%?\s*,\s*\d+%?\s*(,\s*\d+(\.\d+)?%?)?\s*\))$/i;
    try {
      const data = JSON.parse(value);
      if (!Array.isArray(data))
        return false;
      return data.every((color) => colorRegex.test(color)) ? data : false;
    } catch (e) {
      return false;
    }
  }
  display() {
    const { containerEl } = this;
    containerEl.empty();
    containerEl.createEl("h2", { text: "Heatmap Calendar Settings" });
    this.displayColorSettings();
    console.log("settings", this.plugin.settings);
  }
};

// main.ts
var DEFAULT_SETTINGS = {
  mode: "year",
  year: new Date().getFullYear(),
  month: 0,
  week: 1,
  colors: {
    default: ["#c6e48b", "#7bc96f", "#49af5d", "#2e8840", "#196127"]
  },
  entries: [
    { date: "1900-01-01", color: "#7bc96f", intensity: 5, content: "" }
  ],
  showCurrentDayBorder: true,
  defaultEntryIntensity: 4,
  intensityScaleStart: 1,
  intensityScaleEnd: 5
};
var HeatmapCalendar = class extends import_obsidian2.Plugin {
  getHowManyDaysIntoYear(date) {
    return (Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()) - Date.UTC(date.getUTCFullYear(), 0, 0)) / 24 / 60 / 60 / 1e3;
  }
  getHowManyDaysIntoMonth(date) {
    return date.getUTCDate();
  }
  getHowManyDaysIntoWeek(date) {
    return (date.getUTCDay() + 6) % 7;
  }
  getWeekNumber(date) {
    const firstDayOfYear = new Date(date.getFullYear(), 0, 1);
    const pastDaysOfYear = (date.getTime() - firstDayOfYear.getTime()) / 864e5;
    return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
  }
  removeHtmlElementsNotInRange(entries, mode, year, month, week) {
    const calEntriesNotInRange = entries.filter((e) => {
      const entryDate = new Date(e.date);
      if (mode === "year") {
        return entryDate.getFullYear() !== year;
      } else if (mode === "month") {
        return entryDate.getFullYear() !== year || entryDate.getMonth() !== month;
      } else if (mode === "week") {
        const entryWeek = this.getWeekNumber(entryDate);
        return entryDate.getFullYear() !== year || entryWeek !== week;
      }
    });
    calEntriesNotInRange.forEach((e) => e.content && e.content.remove());
  }
  clamp(input, min, max) {
    return input < min ? min : input > max ? max : input;
  }
  map(current, inMin, inMax, outMin, outMax) {
    const mapped = (current - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
    return this.clamp(mapped, outMin, outMax);
  }
  onload() {
    return __async(this, null, function* () {
      yield this.loadSettings();
      this.addSettingTab(new HeatmapCalendarSettingsTab(this.app, this));
      window.renderHeatmapCalendar = (el, calendarData) => {
        var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s;
        const mode = (_a = calendarData.mode) != null ? _a : "year";
        const year = (_b = calendarData.year) != null ? _b : this.settings.year;
        const month = (_c = calendarData.month) != null ? _c : 0;
        const week = (_d = calendarData.week) != null ? _d : 1;
        const colors = typeof calendarData.colors === "string" ? this.settings.colors[calendarData.colors] ? {
          [calendarData.colors]: this.settings.colors[calendarData.colors]
        } : this.settings.colors : (_e = calendarData.colors) != null ? _e : this.settings.colors;
        this.removeHtmlElementsNotInRange(calendarData.entries, calendarData.mode, year, calendarData.month, calendarData.week);
        const calEntries = (_f = calendarData.entries.filter((e) => new Date(e.date + "T00:00").getFullYear() === year)) != null ? _f : this.settings.entries;
        const showCurrentDayBorder = (_g = calendarData.showCurrentDayBorder) != null ? _g : this.settings.showCurrentDayBorder;
        const defaultEntryIntensity = (_h = calendarData.defaultEntryIntensity) != null ? _h : this.settings.defaultEntryIntensity;
        const intensities = calEntries.filter((e) => e.intensity).map((e) => e.intensity);
        const minimumIntensity = intensities.length ? Math.min(...intensities) : this.settings.intensityScaleStart;
        const maximumIntensity = intensities.length ? Math.max(...intensities) : this.settings.intensityScaleEnd;
        const intensityScaleStart = (_i = calendarData.intensityScaleStart) != null ? _i : minimumIntensity;
        const intensityScaleEnd = (_j = calendarData.intensityScaleEnd) != null ? _j : maximumIntensity;
        const mappedEntries = [];
        calEntries.forEach((e) => {
          var _a2;
          const newEntry = __spreadValues({
            intensity: defaultEntryIntensity
          }, e);
          const colorIntensities = typeof colors === "string" ? this.settings.colors[colors] : (_a2 = colors[e.color]) != null ? _a2 : colors[Object.keys(colors)[0]];
          const numOfColorIntensities = Object.keys(colorIntensities).length;
          if (minimumIntensity === maximumIntensity && intensityScaleStart === intensityScaleEnd)
            newEntry.intensity = numOfColorIntensities;
          else
            newEntry.intensity = Math.round(this.map(newEntry.intensity, intensityScaleStart, intensityScaleEnd, 1, numOfColorIntensities));
          mappedEntries[this.getHowManyDaysIntoYear(new Date(e.date))] = newEntry;
        });
        const firstDayOfYear = new Date(Date.UTC(year, 0, 1));
        let numberOfEmptyDaysBeforeYearBegins = (firstDayOfYear.getUTCDay() + 6) % 7;
        const boxes = [];
        if (mode === "year") {
          const lastDayOfYear = new Date(Date.UTC(year, 11, 31));
          const numberOfDaysInYear = this.getHowManyDaysIntoYear(lastDayOfYear);
          const todaysDayNumber = this.getHowManyDaysIntoYear(new Date());
          while (numberOfEmptyDaysBeforeYearBegins) {
            boxes.push({ backgroundColor: "transparent" });
            numberOfEmptyDaysBeforeYearBegins--;
          }
          for (let day = 1; day <= numberOfDaysInYear; day++) {
            const box = {
              classNames: []
            };
            if (day === todaysDayNumber && showCurrentDayBorder)
              (_k = box.classNames) == null ? void 0 : _k.push("today");
            if (mappedEntries[day]) {
              (_l = box.classNames) == null ? void 0 : _l.push("hasData");
              const entry = mappedEntries[day];
              box.date = entry.date;
              if (entry.content)
                box.content = entry.content;
              const currentDayColors = entry.color ? colors[entry.color] : colors[Object.keys(colors)[0]];
              box.backgroundColor = currentDayColors[entry.intensity - 1];
            } else
              (_m = box.classNames) == null ? void 0 : _m.push("isEmpty");
            boxes.push(box);
          }
        } else if (mode === "month") {
          const firstDayOfMonth = new Date(Date.UTC(year, month, 1));
          const lastDayOfMonth = new Date(Date.UTC(year, month + 1, 0));
          let numberOfEmptyDaysBeforeMonthBegins = (firstDayOfMonth.getUTCDay() + 6) % 7;
          const numberOfDaysInMonth = this.getHowManyDaysIntoMonth(lastDayOfMonth);
          const todaysDayNumber = this.getHowManyDaysIntoYear(new Date());
          while (numberOfEmptyDaysBeforeMonthBegins) {
            boxes.push({ backgroundColor: "transparent" });
            numberOfEmptyDaysBeforeMonthBegins--;
          }
          for (let day = 1; day <= numberOfDaysInMonth; day++) {
            const box = {
              classNames: []
            };
            const currentDate = new Date(Date.UTC(year, month, day));
            const currentDayNumber = this.getHowManyDaysIntoYear(currentDate);
            if (currentDayNumber === todaysDayNumber && showCurrentDayBorder)
              (_n = box.classNames) == null ? void 0 : _n.push("today");
            if (mappedEntries[currentDayNumber]) {
              (_o = box.classNames) == null ? void 0 : _o.push("hasData");
              const entry = mappedEntries[currentDayNumber];
              box.date = entry.date;
              if (entry.content)
                box.content = entry.content;
              const currentDayColors = entry.color ? colors[entry.color] : colors[Object.keys(colors)[0]];
              box.backgroundColor = currentDayColors[entry.intensity - 1];
            } else
              (_p = box.classNames) == null ? void 0 : _p.push("isEmpty");
            boxes.push(box);
          }
        } else if (mode === "week") {
          const firstDayOfWeek = new Date(Date.UTC(year, 0, (week - 1) * 7 + 1));
          let numberOfEmptyDaysBeforeWeekBegins = (firstDayOfWeek.getUTCDay() + 6) % 7;
          const todaysDayNumber = this.getHowManyDaysIntoYear(new Date());
          while (numberOfEmptyDaysBeforeWeekBegins) {
            boxes.push({ backgroundColor: "transparent" });
            numberOfEmptyDaysBeforeWeekBegins--;
          }
          for (let day = 1; day <= 7; day++) {
            const box = {
              classNames: []
            };
            const currentDate = new Date(Date.UTC(year, 0, (week - 1) * 7 + day));
            const currentDayNumber = this.getHowManyDaysIntoYear(currentDate);
            if (currentDayNumber === todaysDayNumber && showCurrentDayBorder)
              (_q = box.classNames) == null ? void 0 : _q.push("today");
            if (mappedEntries[currentDayNumber]) {
              (_r = box.classNames) == null ? void 0 : _r.push("hasData");
              const entry = mappedEntries[currentDayNumber];
              box.date = entry.date;
              if (entry.content)
                box.content = entry.content;
              const currentDayColors = entry.color ? colors[entry.color] : colors[Object.keys(colors)[0]];
              box.backgroundColor = currentDayColors[entry.intensity - 1];
            } else
              (_s = box.classNames) == null ? void 0 : _s.push("isEmpty");
            boxes.push(box);
          }
        }
        const heatmapCalendarGraphDiv = createDiv({
          cls: `heatmap-calendar-graph ${mode}`,
          parent: el
        });
        createDiv({
          cls: "heatmap-calendar-year",
          text: String(year).slice(2),
          parent: heatmapCalendarGraphDiv
        });
        const heatmapCalendarMonthsUl = createEl("ul", {
          cls: "heatmap-calendar-months",
          parent: heatmapCalendarGraphDiv
        });
        if (mode === "year") {
          createEl("li", {
            text: "Jan",
            parent: heatmapCalendarMonthsUl
          });
          createEl("li", {
            text: "Feb",
            parent: heatmapCalendarMonthsUl
          });
          createEl("li", {
            text: "Mar",
            parent: heatmapCalendarMonthsUl
          });
          createEl("li", {
            text: "Apr",
            parent: heatmapCalendarMonthsUl
          });
          createEl("li", {
            text: "May",
            parent: heatmapCalendarMonthsUl
          });
          createEl("li", {
            text: "Jun",
            parent: heatmapCalendarMonthsUl
          });
          createEl("li", {
            text: "Jul",
            parent: heatmapCalendarMonthsUl
          });
          createEl("li", {
            text: "Aug",
            parent: heatmapCalendarMonthsUl
          });
          createEl("li", {
            text: "Sep",
            parent: heatmapCalendarMonthsUl
          });
          createEl("li", {
            text: "Oct",
            parent: heatmapCalendarMonthsUl
          });
          createEl("li", {
            text: "Nov",
            parent: heatmapCalendarMonthsUl
          });
          createEl("li", {
            text: "Dec",
            parent: heatmapCalendarMonthsUl
          });
        } else if (mode === "month") {
          const monthName = new Date(Date.UTC(year, month, 1)).toLocaleString("default", { month: "short" });
          createEl("li", {
            text: monthName,
            parent: heatmapCalendarMonthsUl
          });
        } else if (mode === "week") {
          const startDate = new Date(Date.UTC(year, 0, (week - 1) * 7 + 1));
          const endDate = new Date(Date.UTC(year, 0, (week - 1) * 7 + 7));
          const monthNames = [];
          for (let date = startDate; date <= endDate; date.setDate(date.getDate() + 1)) {
            const monthName = date.toLocaleString("default", {
              month: "short"
            });
            if (!monthNames.includes(monthName)) {
              monthNames.push(monthName);
            }
          }
          monthNames.forEach((monthName) => {
            createEl("li", {
              text: monthName,
              parent: heatmapCalendarMonthsUl
            });
          });
        }
        const heatmapCalendarDaysUl = createEl("ul", {
          cls: "heatmap-calendar-days",
          parent: heatmapCalendarGraphDiv
        });
        createEl("li", { text: "Mon", parent: heatmapCalendarDaysUl });
        createEl("li", { text: "Tue", parent: heatmapCalendarDaysUl });
        createEl("li", { text: "Wed", parent: heatmapCalendarDaysUl });
        createEl("li", { text: "Thu", parent: heatmapCalendarDaysUl });
        createEl("li", { text: "Fri", parent: heatmapCalendarDaysUl });
        createEl("li", { text: "Sat", parent: heatmapCalendarDaysUl });
        createEl("li", { text: "Sun", parent: heatmapCalendarDaysUl });
        if (mode === "year") {
          createDiv({
            cls: "heatmap-calendar-year",
            text: String(year).slice(2),
            parent: heatmapCalendarGraphDiv
          });
        } else if (mode === "month" || mode === "week") {
          createDiv({
            cls: "heatmap-calendar-year",
            text: String(year),
            parent: heatmapCalendarGraphDiv
          });
        }
        const heatmapCalendarBoxesUl = createEl("ul", {
          cls: "heatmap-calendar-boxes",
          parent: heatmapCalendarGraphDiv
        });
        boxes.forEach((e) => {
          const entry = createEl("li", {
            attr: __spreadValues(__spreadValues({}, e.backgroundColor && {
              style: `background-color: ${e.backgroundColor};`
            }), e.date && { "data-date": e.date }),
            cls: e.classNames,
            parent: heatmapCalendarBoxesUl
          });
          createSpan({
            cls: "heatmap-calendar-content",
            parent: entry,
            text: e.content
          });
        });
      };
    });
  }
  onunload() {
  }
  loadSettings() {
    return __async(this, null, function* () {
      console.log("heyoh", yield this.loadData());
      this.settings = Object.assign({}, DEFAULT_SETTINGS, yield this.loadData());
    });
  }
  saveSettings() {
    return __async(this, null, function* () {
      yield this.saveData(this.settings);
    });
  }
};
