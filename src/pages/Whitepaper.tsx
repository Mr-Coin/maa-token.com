import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Download, FileText, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const Whitepaper = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleDownload = () => {
    setIsLoading(true);
    const link = document.createElement('a');
    link.href = '/maa-whitepaper.pdf';
    link.download = 'MAA-Token-Whitepaper.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 hover:text-primary transition-colors">
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Home</span>
          </Link>
          
          <div className="flex items-center space-x-2">
            <img 
              src="/MAA-favicon.png?v=2" 
              alt="MAA Token" 
              className="h-6 w-6 rounded-full object-cover"
            />
            <span className="text-lg font-bold">$MAA Whitepaper</span>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-20 pb-12">
        <div className="container mx-auto px-4">
          {/* Header Section */}
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
              Official Documentation
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              $MAA Token
              <span className="block bg-gradient-primary bg-clip-text text-transparent">
                Whitepaper
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive documentation of the $MAA token ecosystem, including tokenomics, 
              utility mechanics, and technical specifications for decentralized mobile gaming rewards.
            </p>
            
            <div className="mt-6 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg max-w-3xl mx-auto">
              <p className="text-sm text-yellow-600 dark:text-yellow-400">
                <strong>Development Notice:</strong> This whitepaper describes the planned $MAA token ecosystem. 
                The token has not been created yet and SkiTime integration is not completed. This document outlines the intended implementation.
              </p>
            </div>
          </div>

          {/* Whitepaper Preview Card */}
          <div className="max-w-4xl mx-auto mb-12">
            <Card className="bg-gradient-card border-border/50">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <FileText className="h-16 w-16 text-primary mx-auto mb-4" />
                  <h2 className="text-2xl font-bold mb-4">Mobile Application Asset ($MAA): Decentralized Token for Cross-Game Rewards</h2>
                  <p className="text-muted-foreground mb-6">
                    This whitepaper outlines the complete vision, technical implementation, 
                    and economic model for the $MAA token ecosystem.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Button 
                      onClick={handleDownload}
                      disabled={isLoading}
                      className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
                      size="lg"
                    >
                      {isLoading ? (
                        "Downloading..."
                      ) : (
                        <>
                          <Download className="mr-2 h-5 w-5" />
                          Download PDF
                        </>
                      )}
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      size="lg"
                      onClick={() => window.open('/maa-whitepaper.pdf', '_blank')}
                      className="border-primary/30 hover:bg-primary/10"
                    >
                      <ExternalLink className="mr-2 h-5 w-5" />
                      View in Browser
                    </Button>
                  </div>
                </div>

                {/* Document Details */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-3">Document Information</h3>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex justify-between">
                        <span>Document Type:</span>
                        <span>Technical Whitepaper</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Version:</span>
                        <span>Draft v1.0</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Blockchain:</span>
                        <span>Solana</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Token Standard:</span>
                        <span>SPL Token</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-3">Key Topics Covered</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Token Economics & Distribution</li>
                      <li>• Cross-Game Utility Mechanics</li>
                      <li>• Technical Architecture</li>
                      <li>• Governance Framework</li>
                      <li>• Security Considerations</li>
                      <li>• Roadmap & Development Plan</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Additional Resources */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center">Additional Resources</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-gradient-card border-border/50 hover:shadow-primary transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Technical Documentation</h3>
                  <p className="text-muted-foreground mb-4">
                    Detailed technical specifications and API documentation for developers.
                  </p>
                  <Button variant="outline" className="w-full">
                    View Technical Docs
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-border/50 hover:shadow-primary transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Community Guidelines</h3>
                  <p className="text-muted-foreground mb-4">
                    Guidelines for community participation and governance processes.
                  </p>
                  <Button variant="outline" className="w-full">
                    Read Guidelines
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="max-w-4xl mx-auto mt-12">
            <Card className="bg-muted/50 border-border/50">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-3">Important Disclaimer</h3>
                <p className="text-sm text-muted-foreground">
                  This whitepaper is for informational purposes only and does not constitute investment advice. 
                  The $MAA token is a utility token designed for in-game rewards and cross-game functionality. 
                  It is not intended as an investment instrument. Please read the full whitepaper for complete 
                  details and consult with financial advisors before making any decisions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whitepaper; 