hexo.extend.generator.register('wiki', function(locals){
	var wikis = locals.pages.filter((page) => page.layout === 'wiki').sort('-date')
	// ���Ҷ�Ӧ�� pages ���Ӧ layout Ϊ wiki��
	// console.log(wikis);
	return {
		path: 'wiki/index.html',
		data: { wiki: true, posts: wikis },
		layout: ['archive'] // �����Ҿ�ֱ��ʹ��archive �� layout �ˣ�����ֻ����Ҫһ���б�
	}
});