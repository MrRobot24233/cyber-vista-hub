
import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, ExternalLink, Calendar, Clock } from 'lucide-react';

const News = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Mock news data - in a real app, this would come from your automated news aggregation system
  const newsArticles = [
    {
      id: 1,
      title: 'Critical Zero-Day Vulnerability Discovered in Popular Enterprise Software',
      summary: 'Security researchers have identified a critical zero-day vulnerability affecting millions of enterprise installations worldwide.',
      category: 'Vulnerabilities',
      source: 'Cybersecurity Weekly',
      sourceUrl: 'https://example.com/article1',
      publishedAt: '2024-06-24T10:00:00Z',
      imageUrl: '/placeholder.svg'
    },
    {
      id: 2,
      title: 'New Ransomware Campaign Targets Healthcare Organizations',
      summary: 'A sophisticated ransomware group has launched a coordinated attack against healthcare providers across multiple countries.',
      category: 'Threats',
      source: 'InfoSec News',
      sourceUrl: 'https://example.com/article2',
      publishedAt: '2024-06-24T08:30:00Z',
      imageUrl: '/placeholder.svg'
    },
    {
      id: 3,
      title: 'AI-Powered Security Tool Revolutionizes Threat Detection',
      summary: 'A breakthrough in artificial intelligence is helping security teams detect and respond to threats 10x faster.',
      category: 'Technology',
      source: 'Tech Security Today',
      sourceUrl: 'https://example.com/article3',
      publishedAt: '2024-06-24T07:15:00Z',
      imageUrl: '/placeholder.svg'
    },
    {
      id: 4,
      title: 'Government Releases New Cybersecurity Framework Guidelines',
      summary: 'Updated guidelines provide comprehensive security standards for critical infrastructure protection.',
      category: 'Policy',
      source: 'Cyber Policy Report',
      sourceUrl: 'https://example.com/article4',
      publishedAt: '2024-06-24T06:00:00Z',
      imageUrl: '/placeholder.svg'
    },
    {
      id: 5,
      title: 'Cloud Security Misconfigurations Expose Millions of Records',
      summary: 'Research reveals widespread cloud security misconfigurations leading to massive data exposures.',
      category: 'Data Breaches',
      source: 'Cloud Security Watch',
      sourceUrl: 'https://example.com/article5',
      publishedAt: '2024-06-23T22:45:00Z',
      imageUrl: '/placeholder.svg'
    },
    {
      id: 6,
      title: 'CISO Best Practices for Remote Work Security',
      summary: 'Industry leaders share insights on maintaining security in distributed work environments.',
      category: 'Best Practices',
      source: 'Executive Security',
      sourceUrl: 'https://example.com/article6',
      publishedAt: '2024-06-23T20:30:00Z',
      imageUrl: '/placeholder.svg'
    }
  ];

  const categories = ['All', 'Vulnerabilities', 'Threats', 'Technology', 'Policy', 'Data Breaches', 'Best Practices'];

  const filteredNews = newsArticles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.summary.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'Vulnerabilities': 'bg-red-500/20 text-red-300 border-red-500/30',
      'Threats': 'bg-orange-500/20 text-orange-300 border-orange-500/30',
      'Technology': 'bg-blue-500/20 text-blue-300 border-blue-500/30',
      'Policy': 'bg-purple-500/20 text-purple-300 border-purple-500/30',
      'Data Breaches': 'bg-red-600/20 text-red-400 border-red-600/30',
      'Best Practices': 'bg-green-500/20 text-green-300 border-green-500/30'
    };
    return colors[category] || 'bg-gray-500/20 text-gray-300 border-gray-500/30';
  };

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Cybersecurity News</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Stay updated with the latest cybersecurity news, automatically aggregated from trusted sources
          </p>
          <div className="flex items-center justify-center gap-2 mt-4 text-sm text-gray-500">
            <Clock className="w-4 h-4" />
            <span>Auto-updated every hour</span>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              type="text"
              placeholder="Search news articles..."
              className="pl-10 bg-black/40 border-cyber-blue/30 text-white"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category 
                  ? "bg-cyber-blue text-black" 
                  : "border-cyber-blue/30 text-gray-300 hover:text-cyber-blue"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNews.map((article) => (
            <Card key={article.id} className="cyber-card group hover:scale-105 transition-all duration-300">
              <div className="space-y-4">
                <div className="aspect-video bg-gradient-to-br from-cyber-blue/20 to-cyber-purple/20 rounded-lg flex items-center justify-center">
                  <Calendar className="w-12 h-12 text-cyber-blue/50" />
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Badge className={getCategoryColor(article.category)}>
                      {article.category}
                    </Badge>
                    <span className="text-xs text-gray-500">
                      {formatDate(article.publishedAt)}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-white group-hover:text-cyber-blue transition-colors">
                    {article.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {article.summary}
                  </p>
                  
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-xs text-cyber-blue">
                      {article.source}
                    </span>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="text-cyber-blue hover:bg-cyber-blue/20 p-2"
                      onClick={() => window.open(article.sourceUrl, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Auto-update notice */}
        <div className="mt-12 text-center">
          <div className="cyber-card inline-block">
            <div className="flex items-center gap-2 text-sm">
              <div className="w-2 h-2 bg-cyber-green rounded-full animate-pulse"></div>
              <span className="text-gray-400">
                News automatically updated from: KrebsOnSecurity, SANS, Dark Reading, CSO Online, and more
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
