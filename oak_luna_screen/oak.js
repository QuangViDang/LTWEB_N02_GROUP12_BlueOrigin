;(function () {
    var noop = function noop() {}
    if ('performance' in window === false) {
        window.performance = {}
    }
    window.performance.mark = performance.mark || noop
    window.performance.measure = performance.measure || noop
    if ('now' in window.performance === false) {
        var nowOffset = Date.now()
        if (performance.timing && performance.timing.navigationStart) {
            nowOffset = performance.timing.navigationStart
        }
        window.performance.now = function now() {
            return Date.now() - nowOffset
        }
    }
})()(function () {
    var now = Date.now()
    window.initialTimestamps = {
        initialTimestamp: now,
        initialRequestTimestamp: Math.round(
            performance.timeOrigin
                ? performance.timeOrigin
                : now - performance.now()
        ),
    }

    window.thunderboltTag = 'libs-releases-GA-local'
    window.thunderboltVersion = '1.12872.0'
})()
