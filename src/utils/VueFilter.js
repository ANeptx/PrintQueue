import Vue from 'vue'
import moment from 'moment'

// ==========================================
// ============ Currency display ============
// ==========================================

// money format tofix
Vue.filter('moneyFormat', function (number) {
  // if (!number) return ''
  return parseFloat(number)
    .toFixed(2)
    .replace(/\d(?=(\d{3})+\.)/g, '$&,')
})

// money format not use tofix
Vue.filter('moneyFormatNotTofix', function (number) {
  // if (!number) return ''
  return parseFloat(number)
    .toString()
    .replace(/\d(?=(\d{3})+\.)/g, '$&,')
})

Vue.filter('formatTime', (date) => {
  // Output => 11:12:11
  return moment(new Date(date)).format('HH : mm : ss')
})

Vue.filter('formatDateTime', function (text) {
  // Output => 15 Nov 2021 11:12:11 a.m.
  return moment(new Date(text)).format('DD MMM YYYY hh:mm:ss a')
})

Vue.filter('ll', function(text) {
  return moment(new Date(parseInt(text))).format('ll')
})

Vue.filter('lll', function(text) {
  return moment(new Date(text)).format('lll')
})

/**
 * Date formatting
 *
 */
Vue.filter('formatDate', function(text) {
  // Output => 15 Nov 2021
  return moment(new Date(text)).format('DD MMM YYYY')
})

Vue.filter('formatDateLong', function(text) {
  // Output => 15 November 2021
  return moment(new Date(text)).format('DD MMMM YYYY')
})

Vue.filter('formatDateTimeLong', function(text) {
  // Output => 15 November 2021 11:12 a.m.
  return moment(new Date(text)).format('DD MMMM YYYY hh:mm:ss a')
})

/**
 * Date and time with sec formatting
 * Note:
 */
Vue.filter('formatDateTimeLongNoSecond', function(text) {
  // Expect output => 15 November 2021 11:12:34 AM
  // Output => 15 November 2021 11:12:34 AM
  return moment(new Date(text)).format('DD MMMM Y hh:mm a')
})