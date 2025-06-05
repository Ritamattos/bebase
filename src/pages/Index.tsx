
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, Shield, Users, Heart, Zap } from "lucide-react";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Load Hotmart script
    const script = document.createElement('script');
    script.src = 'https://checkout.hotmart.com/lib/hotmart-checkout-elements.js';
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      // Initialize Hotmart checkout after script loads
      if (window.checkoutElements) {
        window.checkoutElements.init('salesFunnel').mount('#hotmart-sales-funnel');
      }
    };

    return () => {
      // Cleanup script on component unmount
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Header com urgência */}
      <div className="bg-gradient-to-r from-green-500 to-green-600 text-white py-3">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2">
            <Clock className="w-5 h-5" />
            <span className="font-semibold">OPORTUNIDADE ÚNICA - Por tempo limitado!</span>
          </div>
        </div>
      </div>

      {/* Conteúdo principal */}
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        
        {/* Badge de oferta especial */}
        <div className="text-center mb-6">
          <Badge className="bg-green-100 text-green-700 text-lg px-6 py-2 border border-green-300">
            🎯 OFERTA ESPECIAL DE ÚLTIMA CHANCE
          </Badge>
        </div>

        {/* Título principal */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-green-600 mb-4">
            Espere! Não Vá Embora...
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
            Tenho Uma Proposta IRRECUSÁVEL Para Você!
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Como você demonstrou interesse, vou te dar acesso ao <strong className="text-green-600">App Beba-se</strong> por um valor especial que você não encontrará em nenhum outro lugar!
          </p>
        </div>

        {/* Preço em destaque */}
        <div className="text-center mb-8">
          <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6 max-w-md mx-auto">
            <p className="text-gray-600 mb-2">De R$97,00 por apenas:</p>
            <div className="text-5xl font-bold text-green-600 mb-2">R$29,90</div>
            <p className="text-green-700 font-semibold">Desconto de 70% - APENAS HOJE!</p>
          </div>
        </div>

        {/* Sobre o app */}
        <Card className="p-8 mb-8 border-green-200">
          <div className="text-center mb-6">
            <h3 className="text-3xl font-bold text-green-600 mb-4">
              🍻 App Beba-se - Exclusivo e Único!
            </h3>
            <p className="text-lg text-gray-700">
              O aplicativo que vai transformar suas noites em momentos inesquecíveis!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Heart className="w-6 h-6 text-green-500 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-800">Noites Mais Divertidas</h4>
                  <p className="text-gray-600">Transforme qualquer encontro em uma experiência única e divertida para casais</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Zap className="w-6 h-6 text-green-500 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-800">+150 Perguntas Exclusivas</h4>
                  <p className="text-gray-600">Perguntas cuidadosamente selecionadas para criar momentos únicos e divertidos</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Users className="w-6 h-6 text-green-500 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-800">Jogue com Amigos</h4>
                  <p className="text-gray-600">Também funciona perfeitamente para grupos de amigos em festas e reuniões</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-800">Crie Suas Próprias Perguntas</h4>
                  <p className="text-gray-600">Personalize o app com suas próprias perguntas e torne-o ainda mais especial</p>
                </div>
              </div>
            </div>
          </div>

          {/* Exemplo de pergunta */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
            <p className="text-center text-gray-700 italic">
              <strong>Exemplo de pergunta:</strong><br />
              "Se já se apaixonou por um amigo ou amiga próxima... <span className="text-green-600 font-bold">Beba!</span>"
            </p>
          </div>
        </Card>

        {/* Garantia */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Shield className="w-8 h-8 text-green-500" />
            <span className="text-2xl font-bold text-green-600">Garantia de 7 Dias</span>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Você tem 7 dias para testar o app. Se não ficar satisfeito, devolvemos 100% do seu dinheiro, sem perguntas!
          </p>
        </div>

        {/* Exclusividade */}
        <div className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg p-6 mb-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-3">🔥 EXCLUSIVIDADE TOTAL!</h3>
            <p className="text-lg mb-3">
              Este app é 100% EXCLUSIVO e você só encontra aqui!
            </p>
            <p className="text-sm opacity-90">
              Não está disponível na App Store, Google Play ou qualquer outro lugar. É nosso produto exclusivo!
            </p>
          </div>
        </div>

        {/* Urgência */}
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
          <div className="text-center">
            <h3 className="text-xl font-bold text-red-600 mb-2">⚠️ ATENÇÃO: Oferta por Tempo Limitado!</h3>
            <p className="text-red-700">
              Esta oferta especial é válida apenas para quem chegou até aqui. Se sair desta página, a oportunidade será perdida para sempre!
            </p>
          </div>
        </div>

        {/* Área do código da Hotmart */}
        <div className="text-center mb-8">
          <div className="flex justify-center">
            <div id="hotmart-sales-funnel" className="w-full max-w-md"></div>
          </div>
          
          <p className="text-sm text-gray-500 max-w-md mx-auto mt-4">
            Pagamento 100% seguro processado pela Hotmart. Aceitamos cartão de crédito, PIX e boleto bancário.
          </p>
        </div>

        {/* Footer com benefícios */}
        <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
          <div className="p-4">
            <Shield className="w-8 h-8 text-green-500 mx-auto mb-2" />
            <h4 className="font-semibold text-gray-800">Pagamento Seguro</h4>
            <p className="text-sm text-gray-600">Processado pela Hotmart</p>
          </div>
          
          <div className="p-4">
            <Clock className="w-8 h-8 text-green-500 mx-auto mb-2" />
            <h4 className="font-semibold text-gray-800">Acesso Imediato</h4>
            <p className="text-sm text-gray-600">Receba o app na hora</p>
          </div>
          
          <div className="p-4">
            <CheckCircle className="w-8 h-8 text-green-500 mx-auto mb-2" />
            <h4 className="font-semibold text-gray-800">Garantia Total</h4>
            <p className="text-sm text-gray-600">7 dias para testar</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Index;
