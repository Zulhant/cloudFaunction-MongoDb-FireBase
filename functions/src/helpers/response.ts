
function buildReponse(code: Number, message: String, payload?: Object) {
   return {
      code: code,
      message: message,
      payload: payload
   }
}

export default class responGenerator {
   static success(payload) {
      return typeof (payload === 'object') ? buildReponse(200, 'success', payload) : buildReponse(200, 'success', 'data kosong');
   }
   static bad_request(message) {
      return buildReponse(400, message);
   }
   static Unauthorized() {
      return buildReponse(401, 'unathorization');
   }
   static not_pound() {
      return buildReponse(404, 'data tidak ditemukan');
   }
   static acepted() {
      return buildReponse(202, 'success');
   }
   static created() {
      return buildReponse(201, 'success');
   }

}