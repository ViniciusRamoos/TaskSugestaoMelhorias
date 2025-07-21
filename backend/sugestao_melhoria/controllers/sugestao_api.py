from odoo import http
from odoo.http import request
import json

class SugestaoController(http.Controller):

    @http.route('/api/sugestoes', type='http', auth='public', methods=['GET'], cors='*', csrf=False)
    def listar_sugestoes(self):
        sugestoes = request.env['sugestao.melhoria'].sudo().search([], order='data_envio desc')
        dados = [
            {
                'nome': s.nome,
                'descricao': s.descricao,
                'data_envio': s.data_envio.isoformat(),
            }
            for s in sugestoes
        ]
        return request.make_response(
            json.dumps(dados),
            headers=[('Content-Type', 'application/json')]
        )
    
    @http.route('/api/sugestoes', type='http', auth='public', methods=['POST'], cors='*', csrf=False)
    def criar_sugestao(self, **kwargs):
        try:
            data = json.loads(request.httprequest.data)
            sugestao = request.env['sugestao.melhoria'].sudo().create({
                'nome': data.get('nome'),
                'descricao': data.get('descricao'),
            })
            return  request.make_response(json.dumps({
                'id': sugestao.id,
                'nome': sugestao.nome,
                'descricao': sugestao.descricao,
                'data_envio': sugestao.data_envio.isoformat(),
            }),
            headers=[('Content-Type', 'application/json')]
            )
        except Exception as e:
            return request.make_response(
                json.dumps({'error': str(e)}),
                status=400,
                headers=[('Content-Type', 'application/json')]
            )