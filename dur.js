const lookup = {
	"": 1,
	ms: 1,
	msec: 1,
	msecs: 1,
	millisecond: 1,
	milliseconds: 1,
	s: 1e3,
	sec: 1e3,
	secs: 1e3,
	scnd: 1e3,
	scnds: 1e3,
	second: 1e3,
	seconds: 1e3,
	m: 6e4,
	mn: 6e4,
	min: 6e4,
	mins: 6e4,
	minute: 6e4,
	minutes: 6e4,
	h: 36e5,
	hr: 36e5,
	hs: 36e5,
	hrs: 36e5,
	hour: 36e5,
	hours: 36e5,
	d: 864e5,
	dy: 864e5,
	day: 864e5,
	days: 864e5,
	w: 6048e5,
	wk: 6048e5,
	wks: 6048e5,
	week: 6048e5,
	weeks: 6048e5,
	y: 31536e6,
	ys: 31536e6,
	yr: 31536e6,
	yrs: 31536e6,
	year: 31536e6,
	years: 31536e6,
};

const dur = module.exports = function dur(str, fallback){
	// find all "$number $unit", parse and add up.
	let n = [...str.toLowerCase().matchAll(/(-?[0-9\.]+) *([a-z]*)/g)].reduce(function(s, [ a, n, w ]){
		return s + (parseFloat(n)||0) * (lookup[w] || 0);
	}, 0);
	// if NaN, use fallback or null
	return !isNaN(n) ? n : !isNaN(fallback) ? fallback : null;
};
