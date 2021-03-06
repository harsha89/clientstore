var render = function (theme, data, meta, require) {
    theme('2-column-right', {
        title: data.title,
        header: [
            {
                partial: 'header',
                context: data.header
            }
        ],
        navigation: [
            {
                partial: 'navigation',
                context: require('/helpers/navigation.js').currentPage(data.navigation, data.type, data.search)
            }
        ],

        body: [
        	{
                partial: 'sort-assets',
                context: require('/helpers/sort-assets.js').format(data.sorting, data.paging, data.navigation, data.type)
            },
            {
                partial: 'assets',
                context: require('/helpers/assets.js').currentPage(data.assets,data.sso,data.user, data.paging)
            }/*,
            {
                partial: 'pagination',
                context: require('/helpers/pagination.js').format(data.paging)
            } */
        ],
        right: [
        	{
                partial: 'my-assets-link',
                context: data.myAssets
            },
            {
                partial: 'recent-assets',
                context: data.recentAssets
            },
            {
                partial: 'tags',
                context: data.tags
            }
        ]
    });
};