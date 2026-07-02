import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';

const swaggerDefinition = {
  openapi: '3.0.1',
  info: {
    title: 'Events API',
    description: 'API documentation for the Upcoming Events application',
    version: '1.0.0'
  }
};

const generateSwaggerPaths = modelName => ({
  [`/api/${modelName}`]: {
    post: {
      summary: `Create a new ${modelName}`,
      tags: [modelName],
      security: [
        {
          bearerAuth: []
        }
      ],
      requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: {
              $ref: `#/components/requests/${modelName}`
            }
          }
        }
      },
      responses: {
        201: {
          description: `${modelName} created`,
          content: {
            'application/json': {
              schema: {
                $ref: `#/components/responses/${modelName}`
              }
            }
          }
        },
        400: {
          description: `Bad Request, Validation Error`
        }
      }
    },
    get: {
      summary: `Get all ${modelName}`,
      tags: [modelName],
      parameters: [
        {
          in: 'query',
          name: 'page',
          required: false,
          schema: {
            type: 'integer',
            minimum: 1,
            default: 1
          },
          description: 'The page number to retrieve.'
        },
        {
          in: 'query',
          name: 'limit',
          required: false,
          schema: {
            type: 'integer',
            minimum: 1,
            default: 10
          },
          description: 'The number of items per page.'
        }
      ],
      responses: {
        200: {
          description: `List of ${modelName}`,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  totalCount: {
                    type: 'integer',
                    description: 'Total number of items',
                    example: 1
                  },
                  totalPages: {
                    type: 'integer',
                    description: 'Total number of pages',
                    example: 1
                  },
                  currentPage: {
                    type: 'integer',
                    description: 'Current page number',
                    example: 1
                  },
                  hasNextPage: {
                    type: 'boolean',
                    description: 'Indicates if there are more pages after the current page',
                    example: false
                  },
                  hasPreviousPage: {
                    type: 'boolean',
                    description: 'Indicates if there are more pages before the current page',
                    example: false
                  },
                  results: {
                    type: 'array',
                    items: {
                      $ref: `#/components/responses/${modelName}`
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  },
  [`/api/${modelName}/{id}`]: {
    get: {
      summary: `Get ${modelName} by ID`,
      tags: [modelName],
      parameters: [
        {
          in: 'path',
          name: 'id',
          required: true,
          schema: {
            type: 'string'
          }
        }
      ],
      responses: {
        200: {
          description: `${modelName} details`,
          content: {
            'application/json': {
              schema: {
                $ref: `#/components/responses/${modelName}`
              }
            }
          }
        }
      }
    },
    put: {
      summary: `Update ${modelName} by ID`,
      tags: [modelName],
      security: [
        {
          bearerAuth: []
        }
      ],
      parameters: [
        {
          in: 'path',
          name: 'id',
          required: true,
          schema: {
            type: 'string'
          }
        }
      ],
      requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: {
              $ref: `#/components/requests/${modelName}`
            }
          }
        }
      },
      responses: {
        200: {
          description: `${modelName} updated`,
          content: {
            'application/json': {
              schema: {
                $ref: `#/components/responses/${modelName}`
              }
            }
          }
        },
        404: {
          description: `${modelName} not found`,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  error: {
                    type: 'string',
                    example: 'Record not found'
                  }
                }
              }
            }
          }
        },
        400: {
          description: `Bad Request, Validation Error`,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  error: {
                    type: 'string',
                    example: 'ValidationError: "keyName" length must be at least x characters long'
                  }
                }
              }
            }
          }
        }
      }
    },
    delete: {
      summary: `Delete ${modelName} by ID`,
      tags: [modelName],
      security: [
        {
          bearerAuth: []
        }
      ],
      parameters: [
        {
          in: 'path',
          name: 'id',
          required: true,
          schema: {
            type: 'string'
          }
        }
      ],
      responses: {
        204: {
          description: `${modelName} deleted`
        },
        404: {
          description: `${modelName} not found`
        },
        500: {
          description: `FOREIGN KEY constraint failed (must delete related records first)`,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  error: {
                    type: 'string',
                    example: 'SQLITE_CONSTRAINT: FOREIGN KEY constraint failed'
                  }
                }
              }
            }
          }
        }
      }
    }
  }
});

const options = port => ({
  swaggerDefinition: {
    ...swaggerDefinition,
    servers: [
      {
        url: `http://localhost:${port}`,
        description: 'Local server'
      }
    ],
    paths: {
      ...generateSwaggerPaths('users'),
      ...generateSwaggerPaths('events'),
      '/api/events/upcoming': {
        get: {
          summary: `Get all upcoming events`,
          tags: ['events'],
          responses: {
            200: {
              description: `List of upcoming events`,
              content: {
                'application/json': {
                  schema: {
                    type: 'array',
                    items: {
                      $ref: `#/components/schemas/events`
                    }
                  }
                }
              }
            }
          }
        }
      },
      '/api/users': {
        post: {
          summary: 'User Registration',
          tags: ['auth'],
          requestBody: {
            required: true,
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    email: {
                      type: 'string',
                      format: 'email',
                      example: 'user@example.com'
                    },
                    password: {
                      type: 'string',
                      format: 'password',
                      example: 'password123'
                    }
                  },
                  required: ['email', 'password']
                }
              }
            }
          },
          responses: {
            200: {
              description: 'Successful login',
              content: {
                'application/json': {
                  schema: {
                    $ref: `#/components/responses/users`
                  }
                }
              }
            },
            409: {
              description: 'Conflict. User Already Exists',
              content: {
                'application/json': {
                  schema: {
                    type: 'object',
                    properties: {
                      error: {
                        type: 'string',
                        example: 'User Already Exist'
                      }
                    }
                  }
                }
              }
            },
            400: {
              description: `Bad Request, Validation Error`,
              content: {
                'application/json': {
                  schema: {
                    type: 'object',
                    properties: {
                      error: {
                        type: 'string',
                        example:
                          'ValidationError: "password" length must be at least 8 characters long'
                      }
                    }
                  }
                }
              }
            }
          }
        },
        get: {
          summary: `Get all users`,
          tags: ['users'],
          parameters: [
            {
              in: 'query',
              name: 'page',
              required: false,
              schema: {
                type: 'integer',
                minimum: 1,
                default: 1
              },
              description: 'The page number to retrieve.'
            },
            {
              in: 'query',
              name: 'limit',
              required: false,
              schema: {
                type: 'integer',
                minimum: 1,
                default: 10
              },
              description: 'The number of items per page.'
            }
          ],
          responses: {
            200: {
              description: `List of users`,
              content: {
                'application/json': {
                  schema: {
                    type: 'object',
                    properties: {
                      totalCount: {
                        type: 'integer',
                        description: 'Total number of items',
                        example: 1
                      },
                      totalPages: {
                        type: 'integer',
                        description: 'Total number of pages',
                        example: 1
                      },
                      currentPage: {
                        type: 'integer',
                        description: 'Current page number',
                        example: 1
                      },
                      hasNextPage: {
                        type: 'boolean',
                        description: 'Indicates if there are more pages after the current page',
                        example: false
                      },
                      hasPreviousPage: {
                        type: 'boolean',
                        description: 'Indicates if there are more pages before the current page',
                        example: false
                      },
                      results: {
                        type: 'array',
                        items: {
                          $ref: `#/components/responses/users`
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      },
      '/api/auth/login': {
        post: {
          summary: 'User login',
          tags: ['auth'],
          requestBody: {
            required: true,
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    email: {
                      type: 'string',
                      format: 'email',
                      example: 'user@example.com'
                    },
                    password: {
                      type: 'string',
                      format: 'password',
                      example: 'password123'
                    }
                  },
                  required: ['email', 'password']
                }
              }
            }
          },
          responses: {
            200: {
              description: 'Successful login',
              content: {
                'application/json': {
                  schema: {
                    type: 'object',
                    properties: {
                      token: {
                        type: 'string',
                        description: 'JWT token',
                        example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...'
                      },
                      user: {
                        type: 'object',
                        description: 'JWT payload',
                        properties: {
                          id: {
                            type: 'integer',
                            example: '1'
                          },
                          email: {
                            type: 'string',
                            format: 'email',
                            example: 'user@example.com'
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            403: {
              description: 'Forbidden. Invalid email or password',
              content: {
                'application/json': {
                  schema: {
                    type: 'object',
                    properties: {
                      error: {
                        type: 'string',
                        example: 'Invalid email or password.'
                      }
                    }
                  }
                }
              }
            },
            400: {
              description: `Bad Request, Validation Error`,
              content: {
                'application/json': {
                  schema: {
                    type: 'object',
                    properties: {
                      error: {
                        type: 'string',
                        example:
                          'ValidationError: "password" length must be at least 8 characters long'
                      }
                    }
                  }
                }
              }
            }
          }
        }
      },
      '/api/auth/profile': {
        get: {
          summary: 'Get logged-in user profile',
          tags: ['auth'],
          security: [
            {
              bearerAuth: []
            }
          ],
          responses: {
            200: {
              description: "Logged-in user's profile",
              content: {
                'application/json': {
                  schema: { $ref: `#/components/responses/users` }
                }
              }
            },
            403: {
              description: 'Unauthorized. Invalid or missing token.',
              content: {
                'application/json': {
                  schema: {
                    type: 'object',
                    properties: {
                      message: {
                        type: 'string',
                        example: 'Forbidden'
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT'
        }
      },
      schemas: {
        users: {
          type: 'object',
          properties: {
            id: { type: 'integer' },
            name: { type: 'string' },
            email: { type: 'string', format: 'email' },
            password: { type: 'string', format: 'password' },
            isActive: { type: 'boolean' },
            createdAt: { type: 'string', format: 'date-time' },
            updatedAt: { type: 'string', format: 'date-time' }
          },
          required: ['email', 'password']
        },
        events: {
          type: 'object',
          properties: {
            id: { type: 'integer' },
            title: { type: 'string' },
            description: { type: 'string' },
            date: { type: 'string', format: 'date-time' },
            location: { type: 'string' },
            latitude: { type: 'number', format: 'float' },
            longitude: { type: 'number', format: 'string' },
            organizerId: { type: 'number', format: 'integers' },
            createdAt: { type: 'string', format: 'date-time' },
            updatedAt: { type: 'string', format: 'date-time' }
          },
          required: ['title', 'date', 'location', 'organizerId']
        }
      },
      requests: {
        users: {
          type: 'object',
          properties: {
            name: { type: 'string', example: 'John Doe' },
            email: {
              type: 'string',
              format: 'email',
              example: 'John@example.com'
            },
            password: {
              type: 'string',
              format: 'password',
              example: '12345678'
            },
            isActive: { type: 'boolean' }
          }
        },
        events: {
          type: 'object',
          properties: {
            title: { type: 'string', example: 'Event Title' },
            description: {
              type: 'string',
              example: 'Some Description for the Event'
            },
            date: { type: 'string', format: 'date-time' },
            location: {
              type: 'string',
              example: 'Schloßbezirk 10, 76131 Karlsruhe'
            },
            latitude: {
              type: 'number',
              format: 'float',
              example: '8.404746955649602'
            },
            longitude: {
              type: 'number',
              format: 'float',
              example: '49.01438194665317'
            }
          }
        }
      },
      responses: {
        users: {
          type: 'object',
          properties: {
            id: { type: 'integer', example: 1 },
            name: { type: 'string', example: 'John Doe' },
            email: {
              type: 'string',
              format: 'email',
              example: 'John@example.com'
            },
            isActive: { type: 'boolean' },
            createdAt: { type: 'string', format: 'date-time' },
            updatedAt: { type: 'string', format: 'date-time' }
          }
        },
        events: {
          type: 'object',
          properties: {
            id: { type: 'integer', example: 1 },
            title: { type: 'string', example: 'Event Title' },
            description: {
              type: 'string',
              example: 'Some Description for the Event'
            },
            date: { type: 'string', format: 'date-time' },
            location: {
              type: 'string',
              example: 'Schloßbezirk 10, 76131 Karlsruhe'
            },
            latitude: {
              type: 'number',
              format: 'float',
              example: '8.404746955649602'
            },
            longitude: {
              type: 'number',
              format: 'float',
              example: '49.01438194665317'
            },
            organizerId: { type: 'integer', example: 1 },
            createdAt: { type: 'string', format: 'date-time' },
            updatedAt: { type: 'string', format: 'date-time' }
          }
        }
      }
    }
  },
  apis: []
});

export const setupSwagger = (app, port) => {
  const swaggerSpec = swaggerJsdoc(options(port));
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};
