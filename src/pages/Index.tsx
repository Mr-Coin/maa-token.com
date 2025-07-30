import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Menu, X, ChevronDown, Coins, Zap, Shield, Users, TrendingUp, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const handleConnectWallet = () => {
    toast({
      title: "Feature Under Development",
      description: "Token under development, this feature is not live yet.",
      variant: "destructive",
    });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* <!-- EDITABLE: Navigation Bar - Update links and text as needed --> */}
      <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img 
              src="/MAA-favicon.png?v=2" 
              alt="MAA Token" 
              className="h-8 w-8 rounded-full object-cover"
            />
            <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              $MAA Token
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="hover:text-primary transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="hover:text-primary transition-colors">
              About $MAA
            </button>
            <button onClick={() => scrollToSection('utility')} className="hover:text-primary transition-colors">
              Utility
            </button>
            <button onClick={() => scrollToSection('tokenomics')} className="hover:text-primary transition-colors">
              Tokenomics
            </button>
            <button onClick={() => scrollToSection('roadmap')} className="hover:text-primary transition-colors">
              Roadmap
            </button>
            <button onClick={() => scrollToSection('community')} className="hover:text-primary transition-colors">
              Community
            </button>
            <Button 
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
              onClick={handleConnectWallet}
            >
              Connect Wallet
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-card border-t border-border">
            <div className="px-4 py-4 space-y-4">
              <button onClick={() => scrollToSection('home')} className="block w-full text-left hover:text-primary transition-colors">
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className="block w-full text-left hover:text-primary transition-colors">
                About $MAA
              </button>
              <button onClick={() => scrollToSection('utility')} className="block w-full text-left hover:text-primary transition-colors">
                Utility
              </button>
              <button onClick={() => scrollToSection('tokenomics')} className="block w-full text-left hover:text-primary transition-colors">
                Tokenomics
              </button>
              <button onClick={() => scrollToSection('roadmap')} className="block w-full text-left hover:text-primary transition-colors">
                Roadmap
              </button>
              <button onClick={() => scrollToSection('community')} className="block w-full text-left hover:text-primary transition-colors">
                Community
              </button>
              <Button 
                className="w-full bg-gradient-primary"
                onClick={handleConnectWallet}
              >
                Connect Wallet
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* <!-- EDITABLE: Hero Section - Update taglines and CTAs --> */}
      <section id="home" className="pt-16 min-h-screen flex items-center bg-gradient-hero relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full animate-float"></div>
          <div className="absolute top-40 right-20 w-32 h-32 bg-secondary/20 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-accent/20 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Badge className="mb-6 bg-primary/20 text-primary border-primary/30">
              Built on Solana
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              Discover{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                $MAA
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-muted-foreground">
              Decentralized Rewards for Mobile Gaming on Solana
            </p>
            <p className="text-lg mb-8 max-w-3xl mx-auto text-muted-foreground">
              Earn, spend, and transfer $MAA across games—starting with SkiTime and expanding to more
            </p>
            
            <div className="mb-8 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
              <p className="text-sm text-yellow-600 dark:text-yellow-400">
                <strong>Development Notice:</strong> $MAA token is currently in development. Token creation and SkiTime integration are not yet completed. This website showcases the planned ecosystem.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300" asChild>
                <Link to="/whitepaper">Read Whitepaper</Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary/30 hover:bg-primary/10"
                onClick={() => window.open('https://apps.apple.com/us/app/skitime/id6477750158', '_blank')}
              >
                Download SkiTime
              </Button>
              <Button 
                size="lg" 
                variant="ghost" 
                onClick={() => scrollToSection('about')}
                className="hover:text-primary"
              >
                Learn More <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- EDITABLE: About $MAA Section - Update descriptions --> */}
      <section id="about" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About $MAA</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              $MAA is a Solana-based fungible token designed for cross-game rewards, 
              enabling seamless player ownership and utility across mobile gaming ecosystems.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-gradient-card border-border/50 hover:shadow-primary transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Zap className="h-12 w-12 text-primary mx-auto mb-4 animate-float" />
                <h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
                <p className="text-muted-foreground">
                  Built on Solana for ultra-fast transactions and minimal fees
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border/50 hover:shadow-primary transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Shield className="h-12 w-12 text-secondary mx-auto mb-4 animate-float" style={{animationDelay: '0.5s'}} />
                <h3 className="text-xl font-semibold mb-2">Player Ownership</h3>
                <p className="text-muted-foreground">
                  Your tokens, your wallet, your control. True ownership across games
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border/50 hover:shadow-primary transition-all duration-300">
              <CardContent className="p-6 text-center">
                <TrendingUp className="h-12 w-12 text-accent mx-auto mb-4 animate-float" style={{animationDelay: '1s'}} />
                <h3 className="text-xl font-semibold mb-2">Cross-Game Utility</h3>
                <p className="text-muted-foreground">
                  Earn in one game, spend in another. Universal gaming currency
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border/50 hover:shadow-primary transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Users className="h-12 w-12 text-primary mx-auto mb-4 animate-float" style={{animationDelay: '1.5s'}} />
                <h3 className="text-xl font-semibold mb-2">Community Driven</h3>
                <p className="text-muted-foreground">
                  Governed by players, for players. Join the ecosystem
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* <!-- EDITABLE: Utility Section - Update game examples and mechanics --> */}
      <section id="utility" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">$MAA in Action</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Experience the power of $MAA through planned gameplay mechanics, 
                starting with SkiTime and expanding to more games.
              </p>
              
              <div className="mb-8 p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg">
                <p className="text-sm text-blue-600 dark:text-blue-400">
                  <strong>Development Status:</strong> Token creation and SkiTime integration are in progress. The mechanics described below represent the planned implementation.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/20 p-2 rounded-lg">
                    <Coins className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Earn Through Gameplay</h3>
                    <p className="text-muted-foreground">
                      In SkiTime, earn 1 $MAA per 100 points from survival time and coins collected
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-secondary/20 p-2 rounded-lg">
                    <Shield className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Spend on Upgrades</h3>
                    <p className="text-muted-foreground">
                      Purchase skins, shields, and power-ups to enhance your gaming experience
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-accent/20 p-2 rounded-lg">
                    <TrendingUp className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Transfer & Trade</h3>
                    <p className="text-muted-foreground">
                      Move your tokens between games or trade with other players
                    </p>
                  </div>
                </div>
              </div>

              <Button 
                className="mt-8 bg-gradient-primary hover:shadow-glow transition-all duration-300"
                onClick={() => window.open('https://apps.apple.com/us/app/skitime/id6477750158', '_blank')}
              >
                Download SkiTime to Start Earning
              </Button>
            </div>

            <div className="relative">
              <Card className="bg-gradient-card border-border/50 p-8">
                <img 
                  src="/lovable-uploads/SkiTime-logo.png" 
                  alt="SkiTime Game Logo" 
                  className="w-full rounded-lg shadow-lg"
                />
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- EDITABLE: Tokenomics Section - Update token distribution and numbers --> */}
      <section id="tokenomics" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Tokenomics</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Transparent and sustainable token distribution designed for long-term ecosystem growth
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-card border-border/50">
              <CardContent className="p-8">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-4 px-2">Category</th>
                        <th className="text-left py-4 px-2">Amount</th>
                        <th className="text-left py-4 px-2">Percentage</th>
                        <th className="text-left py-4 px-2">Notes</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      <tr>
                        <td className="py-4 px-2 font-medium">Initial Supply</td>
                        <td className="py-4 px-2">250M $MAA</td>
                        <td className="py-4 px-2">100%</td>
                        <td className="py-4 px-2">Stored in Development Team Wallet as Treasury</td>
                      </tr>
                      <tr>
                        <td className="py-4 px-2 font-medium">Player Rewards</td>
                        <td className="py-4 px-2">Dynamic</td>
                        <td className="py-4 px-2">-</td>
                        <td className="py-4 px-2">Minted via gameplay</td>
                      </tr>
                      <tr>
                        <td className="py-4 px-2 font-medium">Spending Burns</td>
                        <td className="py-4 px-2">5% of transactions</td>
                        <td className="py-4 px-2">-</td>
                        <td className="py-4 px-2">Deflationary mechanism with 5% of transactions sent to Treasury</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="mt-8 p-4 bg-muted/50 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong>Development Disclaimer:</strong> $MAA is a utility token in development for in-game rewards and cross-game functionality. 
                    The token has not been created yet and SkiTime integration is not completed. This website showcases the planned ecosystem.
                    $MAA is not an investment instrument and should not be purchased for speculative purposes.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* <!-- EDITABLE: Roadmap Section - Update timeline and milestones --> */}
      <section id="roadmap" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Roadmap</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our journey to revolutionize mobile gaming rewards
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <Card className="bg-gradient-card border-border/50 hover:shadow-primary transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/20 p-2 rounded-lg mt-1">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-semibold">Q4 2025</h3>
                        <Badge className="bg-yellow-500/20 text-yellow-600 border-yellow-500/30">In Development</Badge>
                      </div>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• $MAA Token Creation on Solana</li>
                        <li>• SkiTime Integration Development</li>
                        <li>• Community Building & Partnerships</li>
                        <li>• Whitepaper & Documentation</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-border/50 hover:shadow-primary transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-secondary/20 p-2 rounded-lg mt-1">
                      <TrendingUp className="h-6 w-6 text-secondary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-semibold">2026</h3>
                        <Badge variant="outline">Upcoming</Badge>
                      </div>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Bog Bounty Game Integration</li>
                        <li>• Cross-Game Rewards System</li>
                        <li>• Governance Implementation</li>
                        <li>• Mobile Wallet Integration</li>
                        <li>• Third-Party Game Partnerships</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-border/50 hover:shadow-primary transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-accent/20 p-2 rounded-lg mt-1">
                      <Users className="h-6 w-6 text-accent" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-semibold">Future</h3>
                        <Badge variant="outline">Vision</Badge>
                      </div>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Multi-Chain Expansion</li>
                        <li>• NFT Integration & Marketplace</li>
                        <li>• DAO Governance Launch</li>
                        <li>• Ecosystem Expansion</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- EDITABLE: Community Section - Update contact info and social links --> */}
      <section id="community" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Community</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Stay updated with the latest developments and connect with fellow players
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="bg-gradient-card border-border/50">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-semibold mb-4">Stay in the Loop</h3>
                  <p className="text-muted-foreground mb-6">
                    Get the latest updates on $MAA token developments, new game integrations, and community events.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                    <input 
                      type="email" 
                      placeholder="Enter your email" 
                      className="flex-1 px-4 py-2 rounded-lg bg-input border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <Button className="bg-gradient-primary hover:shadow-glow transition-all duration-300">
                      Subscribe
                    </Button>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <Button variant="outline" className="border-primary/30 hover:bg-primary/10" size="lg">
                    Follow on X/Twitter
                  </Button>
                  <Button variant="outline" className="border-secondary/30 hover:bg-secondary/10" size="lg">
                    Email: SkiTime@gmail.com
                  </Button>
                </div>

                <div className="mt-8 p-4 bg-muted/50 rounded-lg text-center">
                  <p className="text-sm text-muted-foreground mb-2">
                    <strong>Security Note:</strong> $MAA tokens are secured on Solana blockchain with player-controlled wallets.
                  </p>
                  <Badge className="bg-secondary/20 text-secondary border-secondary/30">
                    Powered by Solana
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* <!-- EDITABLE: Footer - Update links and legal info --> */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img 
                  src="/MAA-favicon.png?v=2" 
                  alt="MAA Token" 
                  className="h-6 w-6 rounded-full object-cover"
                />
                <span className="text-lg font-bold">$MAA Token</span>
              </div>
              <p className="text-muted-foreground">
                Decentralized rewards for the future of mobile gaming.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <button onClick={() => scrollToSection('about')} className="block text-muted-foreground hover:text-primary transition-colors">
                  About $MAA
                </button>
                <button onClick={() => scrollToSection('utility')} className="block text-muted-foreground hover:text-primary transition-colors">
                  Utility
                </button>
                <button onClick={() => scrollToSection('tokenomics')} className="block text-muted-foreground hover:text-primary transition-colors">
                  Tokenomics
                </button>
                <button onClick={() => scrollToSection('roadmap')} className="block text-muted-foreground hover:text-primary transition-colors">
                  Roadmap
                </button>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <div className="space-y-2">
                <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 text-center">
            <p className="text-muted-foreground mb-4">
              © 2025 $MAA Token. All rights reserved.
            </p>
            <div className="max-w-2xl mx-auto p-4 bg-muted/50 rounded-lg">
              <p className="text-sm text-muted-foreground">
                <strong>Disclaimer:</strong> $MAA is a utility token for in-game rewards and cross-game functionality. 
                It is not an investment instrument and should not be purchased for speculative purposes.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;