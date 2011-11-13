var TermExtraction = Class.create({
	initialize : function() {
		this.uri = 'http://search.yahooapis.com/ContentAnalysisService/V1/termExtraction';
		this.applicationId = 'TdLv8LLV34H3uOp9m7bqHYfPwUfV5KLvEcY91_kPc1RlXtEoAcCrKVs1vXU1h7umIetQBx_usSVc9qR9Wr1KizB1AJt8htw-';
	},
	
	extractTerms: function(text) {
		$.post(this.uri, { 
			appid: this.id, 
			context: text,
			output: 'json' }, function(data) {
			  $('.result').html(data);
		}.bind(this));
	}
});