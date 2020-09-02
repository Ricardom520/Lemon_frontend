'use strict';

exports.__esModule = true;

var _util = require('@/lib/utils/util');

exports.default = {
  mounted: function mounted() {
    if (process.env.NODE_ENV === 'production') return;
    if (!this.$vnode) return;

    var _getMigratingConfig = this.getMigrationConfig(),
        _getMigratingConfig$p = _getMigratingConfig.props,
        props = _getMigratingConfig$p === undefined ? {} : _getMigratingConfig$p,
        _getMigratingConfig$e = _getMigratingConfig.events,
        events = _getMigratingConfig$e === undefined ? {} : _getMigratingConfig$e;

    var _$vnode = this.$vnode,
        data = _$vnode.data,
        componentOptions = _$vnode.componentOptions;

    var definedProps = data.attrs || {};
    var definedEvents = componentOptions.listeners || {};

    for (var propName in definedProps) {
      propName = (0, _util.kebabCase)(eventName);
      if (events[eventName]) {
        console.warn('[Winkey Migrating][' + this.$options.name + '][Event]: ' + events[eventName]);
      }
    }
  },

  methods: {
    getMigrationConfig: function getMigrationConfig() {
      return {
        props: {},
        events: {}
      };
    }
  }
};