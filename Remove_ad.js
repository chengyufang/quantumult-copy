# ChangeUA (https://raw.githubusercontent.com/zZPiglet/Task/master/ChangeUA.conf)
; ^https?:\/\/www\.zhihu\.com url request-header (\r\n)User-Agent:.+(\r\n) request-header $1User-Agent: Mozilla/5.0 (iPhone; CPU iPhone OS 13_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.1.1 Mobile/15E148 Safari/16C50 Quark/604.1 T7/10.3 SearchCraft/2.6.3 (Baidu; P1 8.0.0)$2

# 知乎直接看
^https://www\.zhihu\.com/question/ url script-response-body https://raw.githubusercontent.com/id77/QuantumultX/master/Script/zhihu.js
^https://zhuanlan\.zhihu\.com/p/ url script-response-body https://raw.githubusercontent.com/id77/QuantumultX/master/Script/zhihu.js
# 知乎网页去广告&推荐列表
https://www\.zhihu\.com/api/v4/questions/\d+/related-readings url reject-200
https://www\.zhihu\.com/api/v4/answers/\d+/related-readings url reject-200
https://www\.zhihu\.com/api/v4/hot_recommendation url reject-200
https://www\.zhihu\.com/commercial_api/banners_v3/mobile_banner url reject-200
https://zhuanlan\.zhihu\.com/api/articles/\d+/recommendation url reject-200
