import { nextTick } from "vue";

export default {

  // Events
  __onStart: null,
  __onFinish: null,
  __onCustomization: null,

  setEventHandlers: function ({ start, finish, customization }) {
    this.__onStart = start;
    this.__onFinish = finish;
    this.__onCustomization = customization;
  },

  __start: function (options) {
    nextTick(() => {
      this.__onStart && this.__onStart(options);
    });
  },

  __finish: function (options) {
    nextTick(() => {
      this.__onFinish && this.__onFinish(options);
    });
  },

  __customization: function (options) {
    nextTick(() => {
      this.__onCustomization && this.__onCustomization(options);
    });
  },
};