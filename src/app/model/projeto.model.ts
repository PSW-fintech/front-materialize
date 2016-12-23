export class Projeto {
	public _id_projeto:number;
	//public usuario_dono_do_projeto:Usuario;
	public _nome:string;
	public _descricao:string;
	public _url_video_apresentacao:string;
	public _setor_de_atuacao:string;
	public _valor_total_investimento:number;
	public _prazo_levantamento:Date;
	public _faturamento_mensal_estimado:number;
	public _lucro_mensal_estimado:number;
	public _carencia_emprestimo:Date;
	public _prazo_quitacao:Date;
	public _taxa_juros:number;
	public _taxa_iof:number;
	public _taxa_remuneracao_investidor:number;
	public _taxa_intermediacao:number;
	public _aceita_socio:boolean;
	public _percentual_ingresso:number;
	public _percentual_socio:number;
	
	public _editavel:boolean;
	public _investivel:boolean;
	public _rascunho:boolean;

    constructor(
        id_projeto: number,
        nome: string,
        descricao:string,
        //usuario_dono_do_projeto:Usuario,
        url_video_apresentacao:string,
        setor_de_atuacao:string,
        valor_total_investimento:number,
        prazo_levantamento:Date,
        faturamento_mensal_estimado:number,
        lucro_mensal_estimado:number,
        carencia_emprestimo:Date,
        razo_quitacao:Date,
        taxa_juros:number,
        taxa_iof:number,
        taxa_remuneracao_investidor:number,
        taxa_intermediacao:number,
        aceita_socio:boolean,
        percentual_ingresso:number,
        percentual_socio:number
    ){
        this._id_projeto = id_projeto;
        this._nome = nome;
        this._descricao = descricao;
        //this._usuario_dono_do_projeto = usuario_dono_do_projeto;
        this._url_video_apresentacao = url_video_apresentacao;
        this._setor_de_atuacao = setor_de_atuacao;
        this._valor_total_investimento = valor_total_investimento;
        this._prazo_levantamento = prazo_levantamento;
        this._faturamento_mensal_estimado = faturamento_mensal_estimado;
        this._lucro_mensal_estimado = lucro_mensal_estimado;
        this._carencia_emprestimo = carencia_emprestimo;
        this._prazo_quitacao = prazo_levantamento;
        this._taxa_juros = taxa_juros;
        this._taxa_iof = taxa_iof;
        this._taxa_remuneracao_investidor = taxa_remuneracao_investidor;
        this._taxa_intermediacao = taxa_intermediacao;
        this._aceita_socio = aceita_socio;
        this._percentual_ingresso = percentual_ingresso;
        this._percentual_socio = percentual_socio;
        
        this._rascunho = true;
        this._editavel = true;
        this._investivel = false;
    }
    
    getInvestir():boolean {
        return this._investivel;
    }
    
    getEditar():boolean {
        return this._editavel;
    }
    
    getRascunho():boolean {
        return this._rascunho;
    }
    
    publicar(b:boolean):boolean{
        if(b){
            this._rascunho = false;
            this._investivel = true;
            this._investivel = false;
        }
        else
            return false;
    }
}