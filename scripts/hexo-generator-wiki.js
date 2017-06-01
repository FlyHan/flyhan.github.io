hexo.extend.generator.register('wiki', function(locals){
	var wikis = locals.pages.filter((page) => page.layout === 'wiki').sort('-date')
	// 查找对应的 pages 里对应 layout 为 wiki的
	// console.log(wikis);
	return {
		path: 'wiki/index.html',
		data: { wiki: true, posts: wikis },
		layout: ['archive'] // 这里我就直接使用archive 的 layout 了，反正只是需要一个列表
	}
});