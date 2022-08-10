let _headerScroll = {
    headerEl: document.querySelector('header'),
    scrollYPos: window.scrollY,
    scrollCount: 0,

    handleScroll() {
        const _this = _headerScroll;
        if (_this.scrollCount > 0) {
            const headerEl = document.querySelector('header');
            if (window.scrollY >= 50 && _this.scrollYPos < window.scrollY) {
                headerEl.classList.add('off-screen');
            } else if (_this.scrollYPos > window.scrollY) {
                headerEl.classList.remove('off-screen');
            }
            _this.scrollYPos = window.scrollY;
        }
        _this.scrollCount++;
    }
};

window.addEventListener('scroll', _headerScroll.handleScroll);